'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { Search, Bell, Plus, Clock, CircleCheck, CircleDashed, ChevronDown, FileText, Users } from 'lucide-react'

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
                src="/3d_2.png"
                alt="User avatar"
                className="w-9 h-9 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
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

          {/* Documents Section */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">My Documents</h2>
              </div>
              <button 
                onClick={() => router.push('/collaborative')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
              >
                <Plus size={18} />
                New Document
              </button>
            </div>

            {/* Document Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Last Edited
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Collaborators
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                        Loading documents...
                      </td>
                    </tr>
                  ) : documents.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FileText size={48} className="text-gray-300" />
                          <p className="text-gray-500">No documents yet</p>
                          <button 
                            onClick={() => router.push('/collaborative')}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                          >
                            Create your first document
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    documents.map((doc) => (
                      <tr 
                        key={doc.id} 
                        className="hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => openDocument(doc.id)}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText size={18} className="text-blue-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {doc.title || 'Untitled Document'}
                              </p>
                              <p className="text-xs text-gray-500 truncate md:hidden">
                                {formatDate(doc.lastEditedAt || doc.updatedAt)}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="text-sm text-gray-700">
                            {formatDate(doc.lastEditedAt || doc.updatedAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell">
                          {doc.collaborators && doc.collaborators.length > 0 ? (
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-gray-400" />
                              <span className="text-sm text-gray-700">
                                {doc.collaborators.length} {doc.collaborators.length === 1 ? 'collaborator' : 'collaborators'}
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">No collaborators</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              openDocument(doc.id)
                            }}
                            className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          >
                            Open
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}