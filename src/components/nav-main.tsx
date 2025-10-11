"use client"

import { IconCirclePlusFilled, IconFileDescription, IconUsers, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const router = useRouter()
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false)
  const [roomDialogOpen, setRoomDialogOpen] = useState(false)
  const [documentTitle, setDocumentTitle] = useState('')
  const [roomName, setRoomName] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const createDocument = async () => {
    if (!documentTitle.trim()) return

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
          title: documentTitle,
          content: '',
          isPublic: false,
          tags: []
        })
      })

      if (response.ok) {
        const document = await response.json()
        
        // Create a room for this document
        const roomResponse = await fetch('/api/rooms', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: `${documentTitle} - Workspace`,
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
      setDocumentDialogOpen(false)
      setDocumentTitle('')
    }
  }

  const createRoom = async () => {
    if (!roomName.trim()) return

    setIsCreating(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/rooms', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: roomName,
          documentId: null
        })
      })

      if (response.ok) {
        const room = await response.json()
        router.push(`/collaborative?room=${room.code}`)
      }
    } catch (error) {
      console.error('Error creating room:', error)
    } finally {
      setIsCreating(false)
      setRoomDialogOpen(false)
      setRoomName('')
    }
  }

  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    tooltip="Quick Create"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                  >
                    <IconCirclePlusFilled />
                    <span>Quick Create</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem onClick={() => setDocumentDialogOpen(true)}>
                    <IconFileDescription className="mr-2 h-4 w-4" />
                    <span>Document</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setRoomDialogOpen(true)}>
                    <IconUsers className="mr-2 h-4 w-4" />
                    <span>Room</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* Document Creation Dialog */}
      <Dialog open={documentDialogOpen} onOpenChange={setDocumentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Document</DialogTitle>
            <DialogDescription>
              Give your document a name to get started
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="doc-title">Document Title</Label>
              <Input
                id="doc-title"
                placeholder="Enter document title..."
                value={documentTitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
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
              onClick={() => setDocumentDialogOpen(false)}
              disabled={isCreating}
            >
              Cancel
            </Button>
            <Button
              onClick={createDocument}
              disabled={!documentTitle.trim() || isCreating}
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

      {/* Room Creation Dialog */}
      <Dialog open={roomDialogOpen} onOpenChange={setRoomDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Room</DialogTitle>
            <DialogDescription>
              Create a collaborative workspace room
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="room-name">Room Name</Label>
              <Input
                id="room-name"
                placeholder="Enter room name..."
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isCreating) {
                    createRoom()
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRoomDialogOpen(false)}
              disabled={isCreating}
            >
              Cancel
            </Button>
            <Button
              onClick={createRoom}
              disabled={!roomName.trim() || isCreating}
            >
              {isCreating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Room'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
