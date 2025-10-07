'use client'

import CollaborativeEditor from '../components/CollaborativeEditor'
import { useState } from 'react'

export default function CollaborativePage() {
  const [documentId, setDocumentId] = useState('test-doc-1')
  const [username, setUsername] = useState(`User-${Math.floor(Math.random() * 10000)}`)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Collaborative Editor
          </h1>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Document ID
              </label>
              <input
                type="text"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter document ID"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>

        {/* Editor */}
        <CollaborativeEditor 
          documentId={documentId} 
          username={username} 
        />

        {/* Instructions */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            How to Test Collaboration
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Open this page in two different browsers or windows</li>
            <li>Use the same Document ID in both windows</li>
            <li>Start typing in either editor</li>
            <li>You should see real-time updates in both editors</li>
            <li>You'll also see other users' cursors and selections</li>
          </ol>
        </div>
      </div>
    </div>
  )
}