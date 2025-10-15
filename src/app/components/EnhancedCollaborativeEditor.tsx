'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import TiptapLink from '@tiptap/extension-link'
import TiptapImage from '@tiptap/extension-image'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { 
  TextB, 
  TextItalic, 
  TextUnderline, 
  TextStrikethrough,
  Code,
  ListBullets,
  ListNumbers,
  Quotes,
  Code as CodeBlock,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  TextAlignJustify,
  Highlighter
} from '@phosphor-icons/react'
import gsap from 'gsap'
import { useRef } from 'react'

interface EnhancedCollaborativeEditorProps {
  documentId: string
  username?: string
  userColor?: string
}

export default function EnhancedCollaborativeEditor({ 
  documentId, 
  username = `User-${Math.floor(Math.random() * 10000)}`,
  userColor
}: EnhancedCollaborativeEditorProps) {
  const [status, setStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting')
  const [activeUsers, setActiveUsers] = useState<number>(0)
  const toolbarRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)

  const color = useMemo(() => 
    userColor || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    [userColor]
  )

  // Create Yjs doc and provider only once
  const ydoc = useMemo(() => new Y.Doc(), [])
  const wsProvider = useMemo(() => 
    new WebsocketProvider('ws://localhost:4000', documentId, ydoc), 
    [documentId, ydoc]
  )

  // Create editor after provider is ready
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Placeholder.configure({
        placeholder: 'Start writing something amazing...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      TiptapLink.configure({
        openOnClick: false,
      }),
      TiptapImage,
      Collaboration.configure({
        document: ydoc,
      }),
      ...(wsProvider ? [
        CollaborationCursor.configure({
          provider: wsProvider,
          user: {
            name: username,
            color: color
          }
        })
      ] : [])
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[500px] px-4 sm:px-8 lg:px-12 py-4 sm:py-8'
      }
    }
  })

  // Handle WebSocket status
  useEffect(() => {
    const handleStatus = ({ status }: { status: any }) => {
      setStatus(status)
    }

    const handleAwareness = () => {
      if (wsProvider.awareness) {
        setActiveUsers(wsProvider.awareness.getStates().size)
      }
    }

    wsProvider.on('status', handleStatus)
    wsProvider.on('sync', handleAwareness)
    wsProvider.awareness?.on('change', handleAwareness)

    // Initial count
    handleAwareness()
    
    return () => {
      wsProvider.off('status', handleStatus)
      wsProvider.awareness?.off('change', handleAwareness)
      wsProvider.destroy()
    }
  }, [wsProvider])

  // Animate toolbar on mount
  useEffect(() => {
    if (toolbarRef.current) {
      gsap.fromTo(
        toolbarRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }
    if (editorRef.current) {
      gsap.fromTo(
        editorRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: 'power2.out' }
      )
    }
  }, [])

  const ToolbarButton = ({ 
    onClick, 
    isActive, 
    icon: Icon, 
    label 
  }: { 
    onClick: () => void; 
    isActive?: boolean; 
    icon: any; 
    label: string 
  }) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
      onClick()
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 0.9,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut'
        })
      }
    }

    return (
      <button
        ref={buttonRef}
        onClick={handleClick}
        title={label}
        className={`
          p-2 rounded-lg transition-all duration-200
          ${isActive 
            ? 'bg-blue-100 text-blue-600' 
            : 'text-gray-600 hover:bg-gray-100'
          }
        `}
      >
        <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
      </button>
    )
  }

  const getStatusColor = useCallback(() => {
    switch (status) {
      case 'connected':
        return 'bg-green-500'
      case 'disconnected':
        return 'bg-red-500'
      default:
        return 'bg-yellow-500'
    }
  }, [status])

  if (!editor) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Status Bar */}
      <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${getStatusColor()} animate-pulse`} />
            <span className="text-xs sm:text-sm text-gray-600 capitalize">{status}</span>
          </div>
          <div className="h-4 w-px bg-gray-300" />
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-600">{activeUsers} active</span>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">
          {username}
        </div>
      </div>

      {/* Toolbar */}
      <div 
        ref={toolbarRef}
        className="bg-white border-b border-gray-200 px-2 sm:px-6 py-2 sm:py-3 flex items-center gap-1 flex-wrap overflow-x-auto"
      >
        {/* Text Formatting */}
        <div className="flex items-center gap-1 pr-3 border-r border-gray-200">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive('bold')}
            icon={TextB}
            label="Bold"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
            icon={TextItalic}
            label="Italic"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive('underline')}
            icon={TextUnderline}
            label="Underline"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive('strike')}
            icon={TextStrikethrough}
            label="Strikethrough"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            isActive={editor.isActive('highlight')}
            icon={Highlighter}
            label="Highlight"
          />
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 px-3 border-r border-gray-200">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
            icon={ListBullets}
            label="Bullet List"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
            icon={ListNumbers}
            label="Numbered List"
          />
        </div>

        {/* Block Elements */}
        <div className="flex items-center gap-1 px-3 border-r border-gray-200">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive('blockquote')}
            icon={Quotes}
            label="Quote"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            isActive={editor.isActive('codeBlock')}
            icon={CodeBlock}
            label="Code Block"
          />
        </div>

        {/* Text Alignment */}
        <div className="flex items-center gap-1 px-3">
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            isActive={editor.isActive({ textAlign: 'left' })}
            icon={TextAlignLeft}
            label="Align Left"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            isActive={editor.isActive({ textAlign: 'center' })}
            icon={TextAlignCenter}
            label="Align Center"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            isActive={editor.isActive({ textAlign: 'right' })}
            icon={TextAlignRight}
            label="Align Right"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            isActive={editor.isActive({ textAlign: 'justify' })}
            icon={TextAlignJustify}
            label="Justify"
          />
        </div>
      </div>

      {/* Editor */}
      <div 
        ref={editorRef}
        className="flex-1 bg-white overflow-auto"
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

