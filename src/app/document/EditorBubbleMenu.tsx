'use client'

import { BubbleMenu, Editor } from '@tiptap/react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import {
  TextB,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  Code,
  Highlighter,
  LinkSimple,
  DotsThree,
  Paragraph as ParagraphIcon,
  TextHOne,
  TextHTwo,
  TextHThree,
  CaretDown,
  Image as ImageIcon,
  TextHOneIcon,
  TextHTwoIcon,
  TextHThreeIcon,
  TextItalicIcon,
  TextBIcon,
  TextUnderlineIcon,
  TextStrikethroughIcon,
  HighlighterIcon,
  LinkSimpleIcon,
} from '@phosphor-icons/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

interface EditorBubbleMenuProps {
  editor: Editor
  documentId?: string
}

export function EditorBubbleMenu({ editor, documentId }: EditorBubbleMenuProps) {
  const bubbleRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  // GSAP animation when bubble menu appears
  useEffect(() => {
    if (!bubbleRef.current) return

    // Initial state
    gsap.set(bubbleRef.current, { opacity: 0, scale: 0.8, y: 10 })
    gsap.set(buttonsRef.current.filter(Boolean), { opacity: 0, y: 5 })

    // Animate in
    const tl = gsap.timeline()
    
    tl.to(bubbleRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: 'back.out(1.5)',
    })

    tl.to(
      buttonsRef.current.filter(Boolean),
      {
        opacity: 1,
        y: 0,
        duration: 0.15,
        stagger: 0.02,
        ease: 'power2.out',
      },
      '-=0.1'
    )

    return () => {
      tl.kill()
    }
  }, [])

  const BubbleDivider = () => <div className="w-px h-6 bg-gray-300 mx-1" />

  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        duration: 0,
        placement: 'top',
        maxWidth: 'none',
        popperOptions: {
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
                padding: 8,
              },
            },
            {
              name: 'flip',
              options: {
                fallbackPlacements: ['bottom', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
                padding: 8,
              },
            },
          ],
        },
      }}
      className="bg-white shadow-xl rounded-xl p-1.5 border border-gray-200 max-w-[95vw]"
    >
      <div ref={bubbleRef} className="flex items-center gap-0.5 flex-wrap max-w-full">
        {/* Paragraph */}
        <button
          ref={(el) => { buttonsRef.current[0] = el }}
          onClick={() => editor.chain().focus().setParagraph().run()}
          title="Paragraph"
          className={`p-2 rounded-lg transition-colors ${
            !editor.isActive('heading') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ParagraphIcon size={18} weight="bold" />
        </button>

        {/* H1 */}
        <button
          ref={(el) => { buttonsRef.current[1] = el }}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="Heading 1"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHOneIcon size={18} weight="bold" />
        </button>

        {/* H2 */}
        <button
          ref={(el) => { buttonsRef.current[2] = el }}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Heading 2"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHTwoIcon size={18} weight="bold" />
        </button>

        {/* H3 */}
        <button
          ref={(el) => { buttonsRef.current[3] = el }}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Heading 3"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 3 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHThreeIcon size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Bold */}
        <button
          ref={(el) => { buttonsRef.current[4] = el }}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold (Ctrl+B)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('bold') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextBIcon size={18} weight="bold" />
        </button>

        {/* Italic */}
        <button
          ref={(el) => { buttonsRef.current[5] = el }}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic (Ctrl+I)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('italic') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextItalicIcon size={18} weight="bold" />
        </button>

        {/* Underline */}
        <button
          ref={(el) => { buttonsRef.current[6] = el }}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline (Ctrl+U)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('underline') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextUnderlineIcon size={18} weight="bold" />
        </button>

        {/* Strikethrough */}
        <button
          ref={(el) => { buttonsRef.current[7] = el }}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('strike') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextStrikethroughIcon size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Code */}
        <button
          ref={(el) => { buttonsRef.current[8] = el }}
          onClick={() => editor.chain().focus().toggleCode().run()}
          title="Code"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('code') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Code size={18} weight="bold" />
        </button>

        {/* Highlight */}
        <button
          ref={(el) => { buttonsRef.current[9] = el }}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          title="Highlight"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('highlight') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <HighlighterIcon size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Link */}
        <button
          ref={(el) => { buttonsRef.current[10] = el }}
          onClick={() => {
            const url = window.prompt('Enter URL:')
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            }
          }}
          title="Link"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('link') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <LinkSimpleIcon size={18} weight="bold" />
        </button>

        {/* Image Upload */}
        <button
          ref={(el) => { buttonsRef.current[11] = el }}
          onClick={async () => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'
            
            input.onchange = async (e) => {
              const file = (e.target as HTMLInputElement).files?.[0]
              if (!file) return

              try {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('documentId', documentId || '')

                const response = await fetch('/api/images/upload', {
                  method: 'POST',
                  body: formData,
                })

                if (!response.ok) {
                  throw new Error('Failed to upload image')
                }

                const data = await response.json()
                editor.chain().focus().setImage({ src: data.fileUrl }).run()
              } catch (error) {
                console.error('Failed to upload image:', error)
                alert('Failed to upload image')
              }
            }

            input.click()
          }}
          title="Insert Image"
          className="p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
        >
          <ImageIcon size={18} weight="bold" />
        </button>

      </div>
    </BubbleMenu>
  )
}


