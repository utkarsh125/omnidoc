"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Sparkles } from "lucide-react"
import axios from "axios"

const navMainData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Documents",
    url: "/dashboard",
    icon: IconFileDescription,
  },
]

const navSecondaryData: {
  title: string
  url: string
  icon: typeof IconHelp
}[] = []

const documentsData = [
  {
    name: "Recent",
    url: "/dashboard",
    icon: IconDatabase,
  },
  {
    name: "Shared",
    url: "#",
    icon: IconUsers,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
    
    fetchUser(); // Actually call the function
  }, []); // Add empty dependency array

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <Sparkles className="!size-5" />
                <span className="text-base font-semibold">Omnitype</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainData} />
        <NavDocuments items={documentsData} />
        <NavSecondary items={navSecondaryData} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {user && <NavUser user={user} />}
      </SidebarFooter>
    </Sidebar>
  )
}
