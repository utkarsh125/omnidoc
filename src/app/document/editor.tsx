'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { marked } from 'marked'
import './editor-styles.css'
import { EditorBubbleMenu } from './EditorBubbleMenu'

interface EditorProps {
  initialContent?: string // Markdown content from database
  onContentChange?: (markdown: string) => void // Callback with markdown
}

// Helper function to convert HTML to Markdown
function htmlToMarkdown(html: string): string {
  // Basic conversion - you can enhance this
  let markdown = html
    // Headings
    .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
    .replace(/<h4>(.*?)<\/h4>/g, '#### $1\n\n')
    .replace(/<h5>(.*?)<\/h5>/g, '##### $1\n\n')
    .replace(/<h6>(.*?)<\/h6>/g, '###### $1\n\n')
    // Bold and Italic
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b>(.*?)<\/b>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<i>(.*?)<\/i>/g, '*$1*')
    .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>') // HTML fallback for underline
    // Strikethrough
    .replace(/<s>(.*?)<\/s>/g, '~~$1~~')
    .replace(/<del>(.*?)<\/del>/g, '~~$1~~')
    // Code
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, '```\n$1\n```\n')
    // Links
    .replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)')
    // Images
    .replace(/<img src="(.*?)"(?: alt="(.*?)")?\s*\/?>/g, '![$2]($1)')
    // Lists
    .replace(/<ul>([\s\S]*?)<\/ul>/g, (match, content) => {
      return content.replace(/<li>(.*?)<\/li>/g, '- $1\n')
    })
    .replace(/<ol>([\s\S]*?)<\/ol>/g, (match, content) => {
      let counter = 1
      return content.replace(/<li>(.*?)<\/li>/g, () => `${counter++}. $1\n`)
    })
    // Blockquotes
    .replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (match, content) => {
      return '> ' + content.replace(/<p>(.*?)<\/p>/g, '$1').trim() + '\n\n'
    })
    // Highlight (using mark tag)
    .replace(/<mark>(.*?)<\/mark>/g, '==$1==')
    // Horizontal rule
    .replace(/<hr\s*\/?>/g, '\n---\n\n')
    // Paragraphs
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  
  return markdown
}

export default function Editor({ initialContent, onContentChange }: EditorProps) {
  // Convert markdown to HTML for initial content
  const initialHTML = initialContent 
    ? marked.parse(initialContent, { async: false }) as string
    : '<p>Start typing your document...</p>'

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
    content: initialHTML,
    editorProps: {
      attributes: {
        class: 'notion-editor focus:outline-none px-8 py-6 min-h-[500px]',
      },
    },
    onUpdate: ({ editor }) => {
      // Convert to markdown when content changes
      if (onContentChange) {
        const html = editor.getHTML()
        const markdown = htmlToMarkdown(html)
        onContentChange(markdown)
      }
    },
  })

  if (!editor) {
    return null
  }
  
  return (
    <div className="w-full light">
      <div className="rounded-xl !bg-white overflow-hidden" style={{ colorScheme: 'light' }}>
        {/* Bubble Menu - appears on text selection */}
        {editor && <EditorBubbleMenu editor={editor} />}

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