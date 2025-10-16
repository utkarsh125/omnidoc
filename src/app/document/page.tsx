"use client";

import React, { useState, useEffect } from "react";
import { FloppyDiskBackIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import Editor from "./editor";
import { DocumentActions } from "./DocumentActions";
import { useSearchParams, useRouter } from "next/navigation";

const AUTOSAVE_INTERVAL = 3000 // Auto-save every 3 seconds
const LOCAL_STORAGE_KEY_UNSAVED = 'unsaved-document-draft'

export default function DocumentEditorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const documentId = searchParams.get('document');
  
  const [content, setContent] = useState<string>("")
  const [documentName, setDocumentName] = useState<string>("Untitled Document")
  const [isSaving, setIsSaving] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [isLoading, setIsLoading] = useState(!!documentId)

  // Check online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Fetch document from DB if documentId exists
  useEffect(() => {
    const fetchDocument = async () => {
      if (!documentId) {
        // New document - load from localStorage if available
        const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY_UNSAVED)
        if (savedContent) {
          setContent(savedContent)
          console.log('📂 Loaded unsaved draft from localStorage')
        }
        setIsLoading(false)
        return
      }

      // Existing document - fetch from DB
      try {
        setIsLoading(true)
        const response = await fetch(`/api/documents/${documentId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch document')
        }
        const document = await response.json()
        setContent(document.content || '')
        setDocumentName(document.title || 'Untitled Document')
        setLastSaved(new Date(document.updatedAt))
        console.log('📂 Loaded document from database')
      } catch (error) {
        console.error('❌ Failed to fetch document:', error)
        // Fallback to backup if exists
        const backup = localStorage.getItem(`document-${documentId}-backup`)
        if (backup) {
          setContent(backup)
          console.log('📂 Loaded from localStorage backup')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchDocument()
  }, [documentId])

  // Auto-save logic (only for saved documents)
  useEffect(() => {
    if (!content || !hasUnsavedChanges || !documentId) return

    const autoSaveTimer = setTimeout(() => {
      handleAutoSave()
    }, AUTOSAVE_INTERVAL)

    return () => clearTimeout(autoSaveTimer)
  }, [content, hasUnsavedChanges, documentId])

  // Auto-save function (only for saved documents)
  const handleAutoSave = async () => {
    if (!content || !documentId) return

    if (isOnline) {
      // Try to save to server
      await handleSave()
    } else {
      // Save to localStorage if offline
      localStorage.setItem(`document-${documentId}-backup`, content)
      setLastSaved(new Date())
      setHasUnsavedChanges(false)
      console.log('💾 Saved to localStorage (offline)')
    }
  }

  // Manual save function
  const handleSave = async () => {
    if (!content) return
    
    setIsSaving(true)
    try {
      if (!documentId) {
        // First save - create new document in DB
        if (!isOnline) {
          throw new Error('Cannot create document while offline')
        }
        
        const response = await fetch('/api/documents', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            title: documentName, 
            content 
          }),
        })
        
        if (!response.ok) {
          throw new Error('Failed to create document')
        }
        
        const newDocument = await response.json()
        
        // Update URL with new documentId without page reload
        router.push(`/document?document=${newDocument.id}`)
        
        // Clear unsaved draft from localStorage
        localStorage.removeItem(LOCAL_STORAGE_KEY_UNSAVED)
        
        console.log('☁️ Document created and saved to server')
      } else {
        // Update existing document
        if (isOnline) {
          const response = await fetch(`/api/documents/${documentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
          })
          
          if (!response.ok) {
            throw new Error('Failed to update document')
          }
          
          // Clear backup after successful save
          localStorage.removeItem(`document-${documentId}-backup`)
          console.log('☁️ Saved to server')
        } else {
          // Save to localStorage if offline
          localStorage.setItem(`document-${documentId}-backup`, content)
          console.log('💾 Saved to localStorage (offline)')
        }
      }
      
      setLastSaved(new Date())
      setHasUnsavedChanges(false)
    } catch (error) {
      console.error('❌ Failed to save:', error)
      // Fallback to localStorage on error
      const storageKey = documentId 
        ? `document-${documentId}-backup` 
        : LOCAL_STORAGE_KEY_UNSAVED
      localStorage.setItem(storageKey, content)
      setLastSaved(new Date())
      console.log('💾 Saved to localStorage (fallback)')
    } finally {
      setIsSaving(false)
    }
  }

  // Handle content changes from editor (receives markdown)
  const handleContentChange = (markdown: string) => {
    setContent(markdown)
    setHasUnsavedChanges(true)
    
    // Always save to localStorage immediately as backup
    const storageKey = documentId 
      ? `document-${documentId}-backup` 
      : LOCAL_STORAGE_KEY_UNSAVED
    localStorage.setItem(storageKey, markdown)
  }

  // Handle rename
  const handleRename = async (newName: string) => {
    setDocumentName(newName)
    
    if (documentId) {
      // Update document name in DB
      try {
        const response = await fetch(`/api/documents/${documentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: newName }),
        })
        
        if (!response.ok) {
          throw new Error('Failed to rename document')
        }
        
        console.log('📝 Renamed document to:', newName)
      } catch (error) {
        console.error('❌ Failed to rename:', error)
      }
    } else {
      // Just update local state for unsaved documents
      console.log('📝 Renamed unsaved document to:', newName)
    }
  }

  // Handle delete (only for unsaved documents)
  const handleDelete = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY_UNSAVED)
    setContent('')
    setDocumentName('Untitled Document')
    console.log('🗑️ Deleted unsaved draft')
  }

  // Format last saved time
  const formatLastSaved = () => {
    if (!lastSaved) return "Not saved yet"
    const time = lastSaved.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
    return `${time} ${!isOnline ? '(offline)' : ''}`
  }

  if (isLoading) {
    return (
      <div className="bg-white shadow-sm min-h-250 mt-14 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-gray-500">Loading document...</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-sm min-h-250 mt-14 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <div>
        <div className="lg:pt-5 flex items-center justify-between">
          {/* title */}
          <div className="text-lg font-medium text-gray-900">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium px-3 py-1 border-1 border-slate-300 rounded-full">
                {documentName}
              </h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">
                  {isSaving ? "Saving..." : `Last saved ${formatLastSaved()}`}
                </p>
                {hasUnsavedChanges && !isSaving && (
                  <span className="text-xs text-orange-500">• Unsaved</span>
                )}
                {!isOnline && (
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                    Offline Mode
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* actions */}
          <div className="flex items-center gap-2">
            <DocumentActions
              onSave={handleSave}
              onRename={handleRename}
              onDelete={handleDelete}
              showDelete={!documentId}
            />
            <SpotlightButton
              innerColor="rgb(70,70,70)"
              outerColor="rgb(20,20,20)"
              hoverInnerColor="rgb(90,90,90)"
              hoverOuterColor="rgb(40,40,40)"
              className="text-xs flex gap-1 text-gray-100"
              onClick={handleSave}
              disabled={isSaving}
            >
                <FloppyDiskBackIcon size={16} />
                {isSaving ? "Saving..." : documentId ? "Save" : "Save to Database"}
            </SpotlightButton>

            <SpotlightButton
            innerColor="rgb(200,220,255)"
            outerColor="rgb(100,150,255)"
            hoverInnerColor="rgb(180,200,255)"
            hoverOuterColor="rgb(80,130,255)"
            className="text-xs flex gap-1 text-gray-100"
            >
                <PlusCircleIcon size={16}/>
                Invite
            </SpotlightButton>
          </div>
        </div>

        {/* actual editor */}
        <div className="mt-4">
            <Editor 
              key={documentId || 'new'}
              initialContent={content}
              onContentChange={handleContentChange}
            />
        </div>
        
      </div>
      
    </div>
  );
}
