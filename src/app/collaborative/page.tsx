'use client'

import EnhancedCollaborativeEditor from '../components/EnhancedCollaborativeEditor'
import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  ArrowLeftIcon, 
  UserCircleIcon,
  ShareNetworkIcon,
  DotsThreeCircleIcon,
  FloppyDiskIcon,
  UsersThreeIcon
} from '@phosphor-icons/react'
import gsap from 'gsap'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import './editor-styles.css'

export default function WorkspacePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [documentId, setDocumentId] = useState('')
  const [documentTitle, setDocumentTitle] = useState('Untitled Document')
  const [username, setUsername] = useState('')
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
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
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
    }
  }, [])

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

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
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div 
        ref={headerRef}
        className="bg-white border-b border-gray-200 px-3 sm:px-6 py-3 sm:py-4"
      >
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <button
              onClick={() => router.push('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 flex-shrink-0"
              title="Back to Dashboard"
            >
              <ArrowLeftIcon size={24} weight="bold" className="text-gray-700" />
            </button>
            
            <div className="h-8 w-px bg-gray-300 hidden sm:block" />
            
            {/* Document Title */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {isEditingTitle ? (
                <input
                  ref={titleRef}
                  type="text"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onBlur={handleTitleBlur}
                  onKeyDown={(e) => e.key === 'Enter' && handleTitleBlur()}
                  className="text-lg sm:text-xl font-semibold text-gray-900 bg-transparent border-b-2 border-blue-500 focus:outline-none px-2 py-1 w-full"
                />
              ) : (
                <h1
                  onClick={handleTitleEdit}
                  className="text-lg sm:text-xl font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors px-2 py-1 truncate"
                  title={documentTitle}
                >
                  {documentTitle}
                </h1>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Username Display - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
              <UserCircleIcon size={20} weight="fill" className="text-gray-600" />
              <span className="text-sm text-gray-700">{username}</span>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 disabled:opacity-50"
            >
              <FloppyDiskIcon size={18} weight="bold" />
              <span className="text-sm font-medium hidden sm:inline">
                {isSaving ? 'Saving...' : 'Save'}
              </span>
            </button>

            {/* Share Button */}
            <SpotlightButton
              onClick={handleShare}
              innerColor="rgb(215,240,255)"
              outerColor="rgb(100,180,255)"
              hoverInnerColor="rgb(190,230,255)"
              hoverOuterColor="rgb(80,160,255)"
              colorDuration={0.5}
              className="!px-3 sm:!px-4 !py-2"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <ShareNetworkIcon size={18} weight="bold" />
                <span className="hidden sm:inline">Share</span>
              </span>
            </SpotlightButton>
          </div>
        </div>
      </div>

      {/* Editor Container */}
      <div className="flex-1 overflow-hidden px-0 sm:px-4 lg:px-8">
        <div className="h-full max-w-[1400px] mx-auto">
          <div className="h-full bg-white shadow-2xl sm:rounded-t-2xl overflow-hidden">
            <EnhancedCollaborativeEditor 
              documentId={documentId}
              username={username}
            />
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border-t border-gray-200 px-3 sm:px-6 py-2">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2 truncate">
            <span className="truncate">Doc: {documentId}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>Auto-save enabled</span>
            <span>Last saved: Just now</span>
          </div>
        </div>
      </div>
    </div>
  )
}