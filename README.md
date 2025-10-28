# Real-time Document Collaboration with CRDT

## Flow Overview

1. **Document Creation**
   - User creates a document
   - Document is stored in PostgreSQL
   - Each document has a unique ID

2. **Collaboration Methods**
   - **Share Link**: Direct document access via URL
   - **Room**: Real-time collaboration space
     - Generated unique room code
     - Multiple users can join
     - Syncs document changes in real-time

## How CRDT Works (Using Yjs)

### 1. Basic Concept
CRDT (Conflict-free Replicated Data Type) allows multiple users to edit the same document simultaneously without conflicts.

```typescript
// Each client has a local Yjs document
const ydoc = new Y.Doc()
const ytext = ydoc.getText('content')  // Shared text content

// When user types "Hello"
ytext.insert(0, 'Hello')

// This change is automatically:
// 1. Applied locally
// 2. Synced with other clients
// 3. Merged without conflicts
```

### 2. Our Implementation

#### WebSocket Server (websocket-server.ts)
```typescript
// Store active documents
const documents = new Map<string, Y.Doc>()
const connections = new Map<string, Set<WebSocket>>()

// When client connects
wss.on('connection', (ws, req) => {
    const roomCode = url.searchParams.get('room')
    
    // Create/get document for this room
    if (!documents.has(roomCode)) {
        const doc = new Y.Doc()
        documents.set(roomCode, doc)
        
        // Handle document updates
        doc.on('update', (update, origin) => {
            // Broadcast changes to all clients
            connections.get(roomCode)?.forEach(client => {
                if (client !== origin) {
                    client.send(update)
                }
            })
        })
    }
})
```

#### Client Side
```typescript
// Connect to room
const ws = new WebSocket(`ws://localhost:4000?room=${roomCode}`)
const ydoc = new Y.Doc()

// Sync document changes
ws.on('message', (update) => {
    Y.applyUpdate(ydoc, update)
})

// Handle local changes
ydoc.on('update', (update) => {
    ws.send(update)
})
```

### 3. CRDT Magic Explained

#### How Conflicts are Resolved
1. **Unique Identifiers**: Each change has a unique ID
```typescript
// Internal Yjs structure (simplified)
type Change = {
    id: string      // e.g., "user1-123"
    clock: number   // Lamport timestamp
    content: string // Actual change
}
```

2. **Concurrent Changes**: Both changes are preserved
```
User A: "Hello|" (cursor at end)
User B: "Hello|" (cursor at end)

User A types "World"
User B types "Everyone"

Final Result: "HelloWorldEveryone"
// Both changes are integrated based on their unique positions
```

3. **Order Preservation**: Changes are ordered using Lamport timestamps
```typescript
// Each operation gets a timestamp
type Operation = {
    client: string   // Client identifier
    clock: number    // Logical time
    changes: Change[]
}
```

## Room vs Direct Share

### Room-based Collaboration
- Real-time sync via WebSocket
- Multiple users can join via code
- Active presence awareness
- Temporary collaboration space

### Direct Share
- Document-level access
- Permanent access (until revoked)
- Asynchronous collaboration
- Access via URL

## Best Practices

1. **Error Handling**
```typescript
ws.on('error', (error) => {
    console.error('WebSocket error:', error)
    // Implement reconnection logic
})
```

2. **State Recovery**
```typescript
// After reconnection
const state = Y.encodeStateVector(ydoc)
ws.send(state)  // Request missing updates
```

3. **Presence Awareness**
```typescript
// Track active users
const awareness = new Y.Awareness(ydoc)
awareness.setLocalState({ user, cursor })
```

## Security Considerations

1. **Room Access**
   - Validate user permissions
   - Expire inactive rooms
   - Rate limit room creation

2. **Data Integrity**
   - Validate changes server-side
   - Backup document states
   - Handle malicious clients

## Performance Tips

1. **Debounce Updates**
```typescript
let timeout
editor.on('change', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        // Send changes after 100ms of no typing
        sendChanges()
    }, 100)
})
```

2. **Batch Processing**
```typescript
// Group multiple changes
const transaction = ydoc.transact(() => {
    ytext.insert(0, 'Hello')
    ytext.insert(5, 'World')
})
```

