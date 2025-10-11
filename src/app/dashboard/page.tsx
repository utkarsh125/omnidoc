'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { IconSearch, IconBell, IconPlus, IconClock, IconCircleCheck, IconCircleDashed, IconChevronDown, IconFileText, IconUsers } from '@tabler/icons-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ThemeToggle } from "@/components/theme-toggle"

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
  const [userName, setUserName] = useState('John')
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
      return
    }
    
    // Set current date
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }
    setCurrentDate(now.toLocaleDateString('en-US', options))
    
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

  const openDocument = async (docId: string) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/rooms/${docId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const room = await response.json()
        router.push(`/collaborative?room=${room.code}`)
      } else {
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
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-2xl">
              <div className="relative flex-1">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} stroke={1.5} />
                <Input
                  type="text"
                  placeholder="Search or type a command"
                  className="pl-10 pr-16"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold text-muted-foreground bg-muted border border-border rounded">
                  ⌘ F
                </kbd>
              </div>
            </div>
            
            <div className="flex items-center gap-3 ml-6">
              <Button className="gap-2">
                <IconPlus size={18} stroke={1.5} />
                New Project
                <IconChevronDown size={16} stroke={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <IconBell size={20} stroke={1.5} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
              </Button>
              <ThemeToggle />
              <img
                src="/3d_2.png"
                alt="User avatar"
                className="w-9 h-9 rounded-full cursor-pointer hover:ring-2 hover:ring-ring transition-all"
                onError={(e) => {
                  e.currentTarget.src = ''
                }}
              />
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Greeting Section */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-1">{currentDate}</p>
            <h1 className="text-3xl font-bold text-foreground mb-4">Good Evening! {userName},</h1>
            
            {/* Stats */}
            <div className="flex items-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <IconClock size={18} className="text-muted-foreground" stroke={1.5} />
                <span className="font-semibold text-foreground">12hrs</span>
                <span className="text-muted-foreground">Time Saved</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCircleCheck size={18} className="text-muted-foreground" stroke={1.5} />
                <span className="font-semibold text-foreground">24</span>
                <span className="text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCircleDashed size={18} className="text-muted-foreground" stroke={1.5} />
                <span className="font-semibold text-foreground">7</span>
                <span className="text-muted-foreground">Projects In-progress</span>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <Card className="shadow-sm">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <IconFileText size={20} className="text-muted-foreground" stroke={1.5} />
                  <CardTitle>My Documents</CardTitle>
                </div>
                <Button onClick={() => router.push('/collaborative')} size="sm">
                  <IconPlus size={18} stroke={1.5} />
                  New Document
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Title</TableHead>
                    <TableHead className="hidden md:table-cell">Last Edited</TableHead>
                    <TableHead className="hidden lg:table-cell">Collaborators</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                        Loading documents...
                      </TableCell>
                    </TableRow>
                  ) : documents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-12">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <IconFileText size={48} className="text-muted-foreground/50" stroke={1.5} />
                          <p className="text-muted-foreground">No documents yet</p>
                          <Button 
                            onClick={() => router.push('/collaborative')}
                            size="sm"
                          >
                            Create your first document
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    documents.map((doc) => (
                      <TableRow 
                        key={doc.id}
                        className="cursor-pointer"
                        onClick={() => openDocument(doc.id)}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <IconFileText size={18} className="text-primary flex-shrink-0" stroke={1.5} />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {doc.title || 'Untitled Document'}
                              </p>
                              <p className="text-xs text-muted-foreground truncate md:hidden">
                                {formatDate(doc.lastEditedAt || doc.updatedAt)}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className="text-sm text-foreground">
                            {formatDate(doc.lastEditedAt || doc.updatedAt)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {doc.collaborators && doc.collaborators.length > 0 ? (
                            <div className="flex items-center gap-2">
                              <IconUsers size={16} className="text-muted-foreground" stroke={1.5} />
                              <span className="text-sm text-foreground">
                                {doc.collaborators.length} {doc.collaborators.length === 1 ? 'collaborator' : 'collaborators'}
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-muted-foreground">No collaborators</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation()
                              openDocument(doc.id)
                            }}
                            variant="ghost"
                            size="sm"
                          >
                            Open
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}