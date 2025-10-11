"use client"

import * as React from "react"
import { LayoutDashboard, FileText, MessageSquare, File, Receipt, Settings, HelpCircle, LogOut } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import axios from "axios"

interface NavItem {
  title: string
  url: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const navMainData: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Task",
    url: "/dashboard",
    icon: FileText,
  },
  {
    title: "Chats",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Documents",
    url: "/dashboard",
    icon: File,
  },
  {
    title: "Receipts",
    url: "#",
    icon: Receipt,
  },
]

const projectsData = [
  {
    name: "Event Planning",
    color: "bg-purple-500",
  },
  {
    name: "Breakfast Plan",
    color: "bg-green-500",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<'aside'>) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = React.useState<{
    name: string
    email: string
    avatar: string
    userId: string
  } | null>(null)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/user-details", {
          withCredentials: true,
        });

        if(response.data){
          setUser({
            name: response.data.name || 'User',
            email: response.data.email || 'user@mail.com',
            avatar: '',
            userId: response.data.id || ''
          });
        }
      } catch (error) {
        console.error("Error fetching userDetails: ", error);

        //fallback to default
        setUser({
          name: 'User',
          email: 'user@mail.com',
          avatar: '',
          userId: ''
        });
      }
    }
    
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/signout', {}, { withCredentials: true })
      localStorage.removeItem('token')
      router.push('/signin')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col" {...props}>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Mondays</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-1">
          {navMainData.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.url
            
            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm">{item.title}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Projects Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between px-3 mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Projects
            </h3>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.33334V12.6667M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <ul className="space-y-1">
            {projectsData.map((project) => (
              <li key={project.name}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                  <span className="text-sm">{project.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors">
          <HelpCircle size={20} />
          <span className="text-sm font-medium">Help & Support</span>
          <span className="ml-auto bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            8
          </span>
        </button>
        
        {/* User Profile */}
        {user && (
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/150?img=8`}
                alt={user.name}
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.pravatar.cc/150?img=1'
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}