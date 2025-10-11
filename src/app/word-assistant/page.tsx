'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { IconSearch, IconBell, IconSparkles } from '@tabler/icons-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function WordAssistantPage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
      return
    }
  }, [])

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
                  placeholder="Search..."
                  className="pl-10 pr-4"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 ml-6">
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

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
          <Card className="max-w-md w-full shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconSparkles size={32} className="text-primary" stroke={1.5} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Word Assistant</h2>
              <p className="text-muted-foreground">Nothing here yet. Stay tuned for exciting features!</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

