'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, FileText, Clock, Users, Loader2 } from 'lucide-react'

interface Document {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  lastEditedAt: string
  collaborators: Array<{
    user: {
      id: string
      name: string
      email: string
    }
  }>
}

export default function Page() {
  const router = useRouter()
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [newDocTitle, setNewDocTitle] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
      return
    }
    setIsAuthenticated(true)
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/documents', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setDocuments(data)
      } else if (response.status === 401) {
        localStorage.removeItem('token')
        router.push('/signin')
      }
    } catch (error) {
      console.error('Error fetching documents:', error)
    } finally {
      setLoading(false)
    }
  }

  const createDocument = async () => {
    if (!newDocTitle.trim()) return

    setIsCreating(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/documents', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newDocTitle,
          content: '',
          isPublic: false,
          tags: []
        })
      })

      if (response.ok) {
        const document = await response.json()
        
        // Create a room for this document
        const token = localStorage.getItem('token')
        const roomResponse = await fetch('/api/rooms', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: `${newDocTitle} - Workspace`,
            documentId: document.id
          })
        })

        if (roomResponse.ok) {
          const room = await roomResponse.json()
          router.push(`/collaborative?room=${room.code}`)
        }
      }
    } catch (error) {
      console.error('Error creating document:', error)
    } finally {
      setIsCreating(false)
      setDialogOpen(false)
      setNewDocTitle('')
    }
  }

  const openDocument = async (docId: string) => {
    try {
      const token = localStorage.getItem('token')
      // Check if there's an active room for this document
      const response = await fetch(`/api/rooms/${docId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const room = await response.json()
        router.push(`/collaborative?room=${room.code}`)
      } else {
        // Create a new room if none exists
        const createRoomResponse = await fetch('/api/rooms', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: `Document Workspace`,
            documentId: docId
          })
        })

        if (createRoomResponse.ok) {
          const room = await createRoomResponse.json()
          router.push(`/collaborative?room=${room.code}`)
        }
      }
    } catch (error) {
      console.error('Error opening document:', error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
                  <p className="text-muted-foreground mt-1">Create and manage your collaborative documents</p>
                </div>
                
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      New Document
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Document</DialogTitle>
                      <DialogDescription>
                        Give your document a name to get started
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Document Title</Label>
                        <Input
                          id="title"
                          placeholder="Enter document title..."
                          value={newDocTitle}
                          onChange={(e) => setNewDocTitle(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isCreating) {
                              createDocument()
                            }
                          }}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setDialogOpen(false)}
                        disabled={isCreating}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={createDocument}
                        disabled={!newDocTitle.trim() || isCreating}
                      >
                        {isCreating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating...
                          </>
                        ) : (
                          'Create Document'
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">Loading documents...</p>
                  </div>
                </div>
              ) : documents.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Feels empty here...
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    You haven't created any documents yet. Start by creating your first document and collaborate with others in real-time.
                  </p>
                  <Button onClick={() => setDialogOpen(true)} size="lg" className="gap-2">
                    <Plus className="h-5 w-5" />
                    Create Your First Document
                  </Button>
                </div>
              ) : (
                /* Documents Grid */
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {documents.map((doc) => (
                    <Card
                      key={doc.id}
                      className="hover:shadow-md transition-shadow cursor-pointer group"
                      onClick={() => openDocument(doc.id)}
                    >
                      <CardHeader>
                        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                          {doc.content || 'Empty document'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {formatDate(doc.lastEditedAt)}
                          </div>
                          {doc.collaborators.length > 0 && (
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {doc.collaborators.length}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
