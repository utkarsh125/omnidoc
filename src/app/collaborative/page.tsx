'use client'

import EnhancedCollaborativeEditor from '../components/EnhancedCollaborativeEditor'
import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import gsap from 'gsap'
import './editor-styles.css'

export default function WorkspacePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [documentId, setDocumentId] = useState('')
  const [documentTitle, setDocumentTitle] = useState('Untitled Document')
  const [username, setUsername] = useState('')
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Get document ID from URL params
    const docId = searchParams.get('document') || `doc-${Date.now()}`
    setDocumentId(docId)

    // Get or create username
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    } else {
      const newUsername = `User-${Math.floor(Math.random() * 10000)}`
      setUsername(newUsername)
      localStorage.setItem('username', newUsername)
    }
  }, [searchParams])

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [])

  const handleTitleEdit = () => {
    setIsEditingTitle(true)
    setTimeout(() => titleRef.current?.focus(), 0)
  }

  const handleTitleBlur = () => {
    setIsEditingTitle(false)
  }

  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    // You could add a toast notification here
    alert('Link copied to clipboard!')
  }

  if (!documentId) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workspace...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-[#f7f6f3]">
      {/* Notion-style Header */}
      <div 
        ref={headerRef}
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-3 sm:px-6 py-2 sticky top-0 z-10"
      >
        <div className="flex items-center justify-between max-w-[900px] mx-auto">
          {/* Left Side */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <button
              onClick={() => router.push('/dashboard')}
              className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
              title="Back"
            >
              <ArrowLeftIcon size={18} weight="bold" className="text-gray-600" />
            </button>
            
            <div className="h-3 w-px bg-gray-300 hidden sm:block" />
            
            {/* Document Title - Notion Style */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="text-lg">📝</span>
              {isEditingTitle ? (
                <input
                  ref={titleRef}
                  type="text"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onBlur={handleTitleBlur}
                  onKeyDown={(e) => e.key === 'Enter' && handleTitleBlur()}
                  className="text-sm font-medium text-gray-900 bg-transparent focus:outline-none px-1 py-0.5 w-full"
                />
              ) : (
                <button
                  onClick={handleTitleEdit}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-1 py-0.5 truncate text-left"
                  title={documentTitle}
                >
                  {documentTitle}
                </button>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleShare}
              className="px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Editor Container - Off-white background */}
      <div className="flex-1 overflow-auto">
        <EnhancedCollaborativeEditor 
          documentId={documentId}
          username={username}
        />
      </div>
    </div>
  )
}