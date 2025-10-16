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
}

export function EditorBubbleMenu({ editor }: EditorBubbleMenuProps) {
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
      }}
      className="bg-white shadow-xl rounded-xl flex items-center gap-0.5 p-1.5 border border-gray-200"
    >
      <div ref={bubbleRef} className="flex items-center gap-0.5">
        {/* Paragraph */}
        <button
          ref={(el) => (buttonsRef.current[0] = el)}
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
          ref={(el) => (buttonsRef.current[1] = el)}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="Heading 1"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHOne size={18} weight="bold" />
        </button>

        {/* H2 */}
        <button
          ref={(el) => (buttonsRef.current[2] = el)}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Heading 2"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHTwo size={18} weight="bold" />
        </button>

        {/* H3 */}
        <button
          ref={(el) => (buttonsRef.current[3] = el)}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Heading 3"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('heading', { level: 3 }) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextHThree size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Bold */}
        <button
          ref={(el) => (buttonsRef.current[4] = el)}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold (Ctrl+B)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('bold') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextB size={18} weight="bold" />
        </button>

        {/* Italic */}
        <button
          ref={(el) => (buttonsRef.current[5] = el)}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic (Ctrl+I)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('italic') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextItalic size={18} weight="bold" />
        </button>

        {/* Underline */}
        <button
          ref={(el) => (buttonsRef.current[6] = el)}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline (Ctrl+U)"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('underline') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextUnderline size={18} weight="bold" />
        </button>

        {/* Strikethrough */}
        <button
          ref={(el) => (buttonsRef.current[7] = el)}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('strike') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TextStrikethrough size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Code */}
        <button
          ref={(el) => (buttonsRef.current[8] = el)}
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
          ref={(el) => (buttonsRef.current[9] = el)}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          title="Highlight"
          className={`p-2 rounded-lg transition-colors ${
            editor.isActive('highlight') ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Highlighter size={18} weight="bold" />
        </button>

        <BubbleDivider />

        {/* Link */}
        <button
          ref={(el) => (buttonsRef.current[10] = el)}
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
          <LinkSimple size={18} weight="bold" />
        </button>

      </div>
    </BubbleMenu>
  )
}


