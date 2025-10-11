"use client"

import {
  IconDotsVertical,
  IconLogout,
  IconSettings,
  IconKey,
  IconPhoto,
} from "@tabler/icons-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export function NavUser({ user }: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const [userDetails, setUserDetails] = useState<{
    name: string,
    email: string,
    avatar: string
  } | null> (null)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/user-details", {
          withCredentials: true,
        });

        if(response.data){
          setUserDetails({
            name: response.data.name || 'User',
            email: response.data.email || 'user@mail.com',
            avatar: response.data.avatar || ''
          });
          setAvatarUrl(response.data.avatar || '')
        }
      } catch (error) {
        console.error("Error fetching userDetails: ", error);
        setUserDetails({
          name: 'User',
          email: 'user@mail.com',
          avatar: ''
        })
      }
    }
    fetchUser();
  }, [])

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/signout', {}, { withCredentials: true })
      localStorage.removeItem('token')
      router.push('/signin')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleAvatarUpdate = async () => {
    try {
      const token = localStorage.getItem('token')
      await axios.put('/api/auth/update-avatar', 
        { avatarUrl },
        { 
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true 
        }
      )
      setUserDetails(prev => prev ? { ...prev, avatar: avatarUrl } : null)
      alert('Avatar updated successfully!')
    } catch (error) {
      console.error('Error updating avatar:', error)
      alert('Failed to update avatar')
    }
  }

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    try {
      const token = localStorage.getItem('token')
      await axios.put('/api/auth/update-password',
        { currentPassword, newPassword },
        { 
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true 
        }
      )
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      alert('Password updated successfully!')
    } catch (error) {
      console.error('Error updating password:', error)
      alert('Failed to update password')
    }
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage src={userDetails?.avatar} alt={userDetails?.name} />
                  <AvatarFallback className="rounded-lg">{userDetails?.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userDetails?.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {userDetails?.email}
                  </span>
                </div>
                <IconDotsVertical className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={userDetails?.avatar} alt={userDetails?.name} />
                    <AvatarFallback className="rounded-lg">{userDetails?.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{userDetails?.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {userDetails?.email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
                  <IconSettings />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} style={{ color: '#ff5470' }}>
                <IconLogout style={{ color: '#ff5470' }} />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Manage your account settings and preferences
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="avatar" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="avatar">
                <IconPhoto className="mr-2 h-4 w-4" />
                Avatar
              </TabsTrigger>
              <TabsTrigger value="password">
                <IconKey className="mr-2 h-4 w-4" />
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent value="avatar" className="space-y-4 pt-4">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24 rounded-lg">
                  <AvatarImage src={avatarUrl || userDetails?.avatar} alt={userDetails?.name} />
                  <AvatarFallback className="rounded-lg text-2xl">
                    {userDetails?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="w-full space-y-2">
                  <Label htmlFor="avatar-url">Avatar URL</Label>
                  <Input
                    id="avatar-url"
                    placeholder="Enter image URL..."
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                  />
                </div>
                <Button onClick={handleAvatarUpdate} className="w-full">
                  Update Avatar
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter current password..."
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password..."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Button onClick={handlePasswordUpdate} className="w-full">
                  Update Password
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
