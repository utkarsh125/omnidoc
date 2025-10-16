'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { useMemo } from 'react'
import './editor-styles.css'
import { EditorBubbleMenu } from './EditorBubbleMenu'

interface EditorProps {
  initialContent?: string // JSON content from Tiptap editor
  onContentChange?: (json: string) => void // Callback with JSON
  documentId?: string // Document ID for image uploads
}

export default function Editor({ initialContent, onContentChange, documentId }: EditorProps) {
  // Parse JSON content 
  const parsedContent = useMemo(() => {
    if (!initialContent) return null
    
    try {
      // Parse the content as json
      return JSON.parse(initialContent)
    } catch (error) {
      console.error('Failed to parse content JSON:', error)
      console.warn('Content is not valid JSON, using as-is')
      // Return null to show placeholder
      return null
    }
  }, [initialContent])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Placeholder.configure({
        placeholder: 'Start typing your document...',
      }),
    ],
    content: parsedContent,
    editorProps: {
      attributes: {
        class: 'notion-editor focus:outline-none px-8 py-6 min-h-[500px]',
      },
    },
    onUpdate: ({ editor }) => {
      // Convert to JSON when content changes
      if (onContentChange) {
        const json = JSON.stringify(editor.getJSON())
        onContentChange(json)
      }
    },
  })

  if (!editor) {
    return null
  }
  
  return (
    <div className="w-full max-w-5xl mx-auto light">
      <div className="rounded-xl !bg-white overflow-hidden" style={{ colorScheme: 'light' }}>
        {/* Bubble Menu - appears on text selection */}
        {editor && <EditorBubbleMenu editor={editor} documentId={documentId} />}

        {/* Editor Content */}
        <div style={{ colorScheme: 'light', background: 'white' }}>
          <EditorContent 
            editor={editor} 
            className="!bg-white"
          />
        </div>
      </div>
    </div>
  )
}