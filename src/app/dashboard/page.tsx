'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { Search, Bell, Plus, Share2, Clock, CircleCheck, CircleDashed, MoreVertical, CalendarDays, StickyNote, ChevronDown } from 'lucide-react'

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

interface Task {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

interface ScheduleEvent {
  id: number
  title: string
  startTime: string
  endTime: string
  day: number
  collaborators: string[]
}

interface Note {
  id: number
  title: string
  description: string
  checked: boolean
}

export default function Page() {
  const router = useRouter()
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('John')
  const [currentDate, setCurrentDate] = useState('')

  // Mock data for tasks
  const [tasks, setTasks] = useState<Task[]>([])

  // Mock schedule data
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: 1,
      title: 'Kickoff Meeting',
      startTime: '01:00 PM',
      endTime: '02:30 PM',
      day: 17,
      collaborators: ['https://i.pravatar.cc/150?img=1', 'https://i.pravatar.cc/150?img=2']
    },
    {
      id: 2,
      title: 'Create Wordpress website for event Registration',
      startTime: '04:00 PM',
      endTime: '02:30 PM',
      day: 17,
      collaborators: ['https://i.pravatar.cc/150?img=3', 'https://i.pravatar.cc/150?img=4']
    },
    {
      id: 3,
      title: 'Create User flow for hotel booking',
      startTime: '05:00 PM',
      endTime: '02:30 PM',
      day: 17,
      collaborators: ['https://i.pravatar.cc/150?img=5', 'https://i.pravatar.cc/150?img=6']
    }
  ]

  // Mock notes data
  const notes: Note[] = [
    {
      id: 1,
      title: 'Landing Page For Website',
      description: 'To get started on a landing page, could you provide a bit more detail about its purpose?',
      checked: false
    },
    {
      id: 2,
      title: 'Fixing icons with dark backgrounds',
      description: 'Use icons that are easily recognizable and straightforward. Avoid overly complex designs that might confuse users.',
      checked: false
    },
    {
      id: 3,
      title: 'Discussion regarding userflow improvement',
      description: "What's the main goal of the landing page? (e.g., lead generation, product )",
      checked: false
    }
  ]

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
    loadTasksData()
  }, [])

  const loadTasksData = async () => {
    try {
      const response = await fetch('/dashboard/data.json')
      const data = await response.json()
      setTasks(data.slice(0, 3)) // Show first 3 tasks
    } catch (error) {
      console.error('Error loading tasks:', error)
    }
  }

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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'bg-blue-500'
      case 'in process':
        return 'bg-green-500'
      default:
        return 'bg-purple-500'
    }
  }

  const getWeekDays = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    const dates = [15, 16, 17, 18, 19, 20, 14]
    return days.map((day, index) => ({ day, date: dates[index] }))
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AppSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search or type a command"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
                  ⌘ F
                </kbd>
              </div>
            </div>
            
            <div className="flex items-center gap-4 ml-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus size={18} />
                New Project
                <ChevronDown size={16} />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
              </button>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="User avatar"
                className="w-9 h-9 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.pravatar.cc/150?img=1'
                }}
              />
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Greeting Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">{currentDate}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Good Evening! {userName},</h1>
            
            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">12hrs</span>
                <span className="text-gray-500">Time Saved</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">24</span>
                <span className="text-gray-500">Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleDashed size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">7</span>
                <span className="text-gray-500">Projects In-progress</span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">My Projects</h2>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1">
                  This Week
                  <ChevronDown size={14} />
                </button>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                See All
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Task Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assign
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : tasks.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                        No tasks available
                      </td>
                    </tr>
                  ) : (
                    tasks.map((task) => (
                      <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-gray-400">
                              <span className="text-sm">{task.target}</span>
                              <span className="text-sm">{task.limit}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{task.header}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <img
                              src={`https://i.pravatar.cc/150?img=${task.id}`}
                              alt={task.reviewer}
                              className="w-6 h-6 rounded-full"
                              onError={(e) => {
                                e.currentTarget.src = 'https://i.pravatar.cc/150?img=1'
                              }}
                            />
                            <span className="text-sm text-gray-700">{task.reviewer}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Section - Schedule and Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Schedule */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays size={20} className="text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Schedule</h2>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Week Days */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-7 gap-2">
                  {getWeekDays().map((item, index) => (
                    <div
                      key={index}
                      className={`text-center py-2 rounded-lg ${
                        item.date === 17
                          ? 'bg-purple-500 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-xs font-medium">{item.day}</div>
                      <div className="text-sm font-semibold mt-1">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events */}
              <div className="px-6 py-4 space-y-3">
                {scheduleEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-1 h-12 bg-purple-500 rounded-full"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-xs text-gray-500">
                        {event.startTime} to {event.endTime}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-2">
                        {event.collaborators.map((avatar, idx) => (
                          <img
                            key={idx}
                            src={avatar}
                            alt="Collaborator"
                            className="w-6 h-6 rounded-full border-2 border-white"
                            onError={(e) => {
                              e.currentTarget.src = 'https://i.pravatar.cc/150?img=1'
                            }}
                          />
                        ))}
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                        <MoreVertical size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StickyNote size={20} className="text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Notes</h2>
                </div>
              </div>

              <div className="px-6 py-4 space-y-4">
                {notes.map((note) => (
                  <div key={note.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={note.checked}
                      onChange={() => {}}
                      className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{note.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2">{note.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}