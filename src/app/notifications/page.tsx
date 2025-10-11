'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Check, X, Users, FileText, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Notification {
  id: string
  type: 'document_invite' | 'room_invite' | 'collaboration_request'
  title: string
  description: string
  documentId?: string
  roomId?: string
  invitedBy: {
    name: string
    email: string
  }
  createdAt: string
  status: 'pending' | 'accepted' | 'rejected'
}

export default function NotificationsPage() {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
      return
    }
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/notifications', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setNotifications(data)
      } else if (response.status === 401) {
        localStorage.removeItem('token')
        router.push('/signin')
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAccept = async (notificationId: string) => {
    setProcessingId(notificationId)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/notifications/${notificationId}/accept`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        setNotifications(prev => 
          prev.map(n => n.id === notificationId ? { ...n, status: 'accepted' } : n)
        )
      }
    } catch (error) {
      console.error('Error accepting invitation:', error)
    } finally {
      setProcessingId(null)
    }
  }

  const handleReject = async (notificationId: string) => {
    setProcessingId(notificationId)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/notifications/${notificationId}/reject`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        setNotifications(prev => 
          prev.map(n => n.id === notificationId ? { ...n, status: 'rejected' } : n)
        )
      }
    } catch (error) {
      console.error('Error rejecting invitation:', error)
    } finally {
      setProcessingId(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = now.getTime() - date.getTime()
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'document_invite':
        return <FileText className="h-5 w-5" />
      case 'room_invite':
        return <Users className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const pendingNotifications = notifications.filter(n => n.status === 'pending')
  const processedNotifications = notifications.filter(n => n.status !== 'pending')

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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Bell className="h-8 w-8" />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Notifications</h1>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                      Manage your invitations and updates
                    </p>
                  </div>
                </div>
                {pendingNotifications.length > 0 && (
                  <Badge variant="secondary" className="w-fit">
                    {pendingNotifications.length} pending invitation{pendingNotifications.length !== 1 ? 's' : ''}
                  </Badge>
                )}
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">Loading notifications...</p>
                  </div>
                </div>
              ) : notifications.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-12 sm:py-20 text-center px-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    No notifications yet
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
                    When someone invites you to collaborate on a document or join a room, you'll see it here.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Pending Notifications */}
                  {pendingNotifications.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold">Pending Invitations</h2>
                      <div className="space-y-3">
                        {pendingNotifications.map((notification) => (
                          <Card key={notification.id} className="border-l-4 border-l-primary">
                            <CardHeader>
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3 flex-1">
                                  <div className="mt-1 text-primary">
                                    {getNotificationIcon(notification.type)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <CardTitle className="text-base">{notification.title}</CardTitle>
                                    <CardDescription className="mt-1">
                                      {notification.description}
                                    </CardDescription>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                      <span>From: {notification.invitedBy.name}</span>
                                      <span>•</span>
                                      <span>{formatDate(notification.createdAt)}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    onClick={() => handleAccept(notification.id)}
                                    disabled={processingId === notification.id}
                                  >
                                    {processingId === notification.id ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Check className="h-4 w-4 mr-1" />
                                        Accept
                                      </>
                                    )}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleReject(notification.id)}
                                    disabled={processingId === notification.id}
                                  >
                                    <X className="h-4 w-4 mr-1" />
                                    Decline
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Processed Notifications */}
                  {processedNotifications.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold">Previous Notifications</h2>
                      <div className="space-y-3">
                        {processedNotifications.map((notification) => (
                          <Card key={notification.id} className="opacity-60">
                            <CardHeader>
                              <div className="flex items-start gap-3">
                                <div className="mt-1 text-muted-foreground">
                                  {getNotificationIcon(notification.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <CardTitle className="text-base">{notification.title}</CardTitle>
                                    <Badge variant={notification.status === 'accepted' ? 'default' : 'secondary'}>
                                      {notification.status}
                                    </Badge>
                                  </div>
                                  <CardDescription className="mt-1">
                                    {notification.description}
                                  </CardDescription>
                                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                    <span>From: {notification.invitedBy.name}</span>
                                    <span>•</span>
                                    <span>{formatDate(notification.createdAt)}</span>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

