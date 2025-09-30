'use client'

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"


const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit
        ],
        content: '<p>Hello World!</p>',
        immediatelyRender: false, //prevent SSR issues
    })

    return <EditorContent editor={editor}/>
}

export default Tiptap;