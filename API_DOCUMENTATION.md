# Room API Documentation

>This document is AI-generated, no way in hell I'm writing all of this down in an organised manner
## Base URL
```
http://localhost:3000/api
```

## Authentication
All endpoints require authentication via cookie:
```
Cookie: auth-token=YOUR_AUTH_TOKEN
```

---

## Endpoints

### 1. Create Room

**Endpoint:** `POST /api/rooms`

**Description:** Creates a new collaboration room with a unique code.

**Headers:**
```
Content-Type: application/json
Cookie: auth-token=YOUR_TOKEN
```

**Request Body:**
```json
{
  "name": "My Collaboration Room",
  "documentId": "ae3b1e6b-9ca0-4914-ad4b-adf581695ee2"  // Optional
}
```

**Success Response (201):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "My Collaboration Room",
  "code": "AB12",
  "isActive": true,
  "shareLink": null,
  "isPublic": false,
  "allowedEmails": [],
  "createdAt": "2025-10-10T12:00:00.000Z",
  "updatedAt": "2025-10-10T12:00:00.000Z",
  "createdBy": {
    "id": "user-uuid",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "document": {
    "id": "ae3b1e6b-9ca0-4914-ad4b-adf581695ee2",
    "title": "My Document",
    "content": "..."
  },
  "participants": [
    {
      "id": "participant-uuid",
      "userId": "user-uuid",
      "role": "host",
      "joinedAt": "2025-10-10T12:00:00.000Z",
      "user": {
        "id": "user-uuid",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  ]
}
```

**Error Responses:**

**404 - Document Not Found:**
```json
{
  "error": "Document not found"
}
```

**500 - Server Error:**
```json
{
  "error": "Failed to create room"
}
```

---

### 2. Generate Share Link

**Endpoint:** `POST /api/rooms/share`

**Description:** Generates a shareable link for an existing room. Only the host can generate share links.

**Headers:**
```
Content-Type: application/json
Cookie: auth-token=HOST_TOKEN
```

**Request Body:**
```json
{
  "roomCode": "AB12",
  "isPublic": true,
  "allowedEmails": ["user@example.com", "another@example.com"]  // Optional, empty for public
}
```

**Success Response (200):**
```json
{
  "shareLink": "http://localhost:3000/rooms/join?link=550e8400-e29b-41d4-a716-446655440000",
  "roomCode": "AB12"
}
```

**Error Responses:**

**404 - Room Not Found or Not Authorized:**
```json
{
  "error": "Room not found or not authorized"
}
```

**500 - Server Error:**
```json
{
  "error": "Failed to share room"
}
```

---

### 3. Get Room Details

**Endpoint:** `GET /api/rooms/[code]`

**Description:** Retrieves details about a specific room by its code.

**Headers:**
```
Cookie: auth-token=YOUR_TOKEN
```

**URL Parameters:**
- `code` - The room code (e.g., "AB12")

**Example:**
```
GET /api/rooms/AB12
```

**Success Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "My Collaboration Room",
  "code": "AB12",
  "isActive": true,
  "shareLink": "550e8400-e29b-41d4-a716-446655440000",
  "isPublic": true,
  "allowedEmails": [],
  "createdAt": "2025-10-10T12:00:00.000Z",
  "updatedAt": "2025-10-10T12:00:00.000Z",
  "createdBy": {
    "id": "user-uuid",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "document": {
    "id": "document-uuid",
    "title": "Shared Document",
    "content": "..."
  },
  "participants": [
    {
      "id": "participant-uuid",
      "userId": "user-uuid",
      "role": "host",
      "joinedAt": "2025-10-10T12:00:00.000Z",
      "user": {
        "id": "user-uuid",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  ]
}
```

**Error Responses:**

**404 - Room Not Found:**
```json
{
  "error": "Room not found"
}
```

**403 - Not Authorized:**
```json
{
  "error": "Not authorized to view this room"
}
```

**500 - Server Error:**
```json
{
  "error": "Failed to fetch room"
}
```

---

### 4. Join Room

**Endpoint:** `POST /api/rooms/join`

**Description:** Join a room using either a room code or share link.

**Headers:**
```
Content-Type: application/json
Cookie: auth-token=YOUR_TOKEN
```

**Request Body (Option 1 - Join by Code):**
```json
{
  "roomCode": "AB12"
}
```

**Request Body (Option 2 - Join by Share Link):**
```json
{
  "shareLink": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com"  // Required for private rooms
}
```

**Success Response (200):**
```json
{
  "roomCode": "AB12",
  "role": "participant"
}
```

**Error Responses:**

**404 - Room Not Found:**
```json
{
  "error": "Room not found"
}
```

**400 - Already a Participant:**
```json
{
  "error": "Already a participant"
}
```

**403 - Not Authorized:**
```json
{
  "error": "Not authorized to join"
}
```

**500 - Server Error:**
```json
{
  "error": "Failed to join room"
}
```

---

### 5. Leave Room

**Endpoint:** `POST /api/rooms/leave`

**Description:** Leave a room. If the last participant leaves, the room is deactivated.

**Headers:**
```
Content-Type: application/json
Cookie: auth-token=YOUR_TOKEN
```

**Request Body:**
```json
{
  "roomCode": "AB12"
}
```

**Success Response (200):**
```json
{
  "message": "You have left the room"
}
```

**Error Responses:**

**404 - Room Not Found:**
```json
{
  "error": "Room not found"
}
```

**500 - Server Error:**
```json
{
  "error": "Failed to leave the room"
}
```

---

## Complete Testing Flow

### Step 1: Create a Room
```bash
POST /api/rooms
{
  "name": "Test Room",
  "documentId": "ae3b1e6b-9ca0-4914-ad4b-adf581695ee2"
}
# Save the returned "code" (e.g., "AB12")
```

### Step 2: Generate Share Link (as host)
```bash
POST /api/rooms/share
{
  "roomCode": "AB12",
  "isPublic": true,
  "allowedEmails": []
}
# Save the UUID from shareLink
```

### Step 3: Join Room (as different user)
```bash
POST /api/rooms/join
{
  "roomCode": "AB12"
}
# OR
{
  "shareLink": "uuid-from-step-2"
}
```

### Step 4: Get Room Details
```bash
GET /api/rooms/AB12
# View all participants and room info
```

### Step 5: Leave Room
```bash
POST /api/rooms/leave
{
  "roomCode": "AB12"
}
```

---

## Status Code Summary

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Created (room created successfully) |
| 400 | Bad Request (invalid data, already joined) |
| 403 | Forbidden (not authorized) |
| 404 | Not Found (room or document not found) |
| 500 | Internal Server Error |

---

## Common Error Scenarios

### Authentication Errors
- Missing or invalid auth token
- Expired session

### Room Access Errors
- Room code doesn't exist
- Room is inactive
- User not authorized (private room)
- Email not in allowed list

### Duplicate Actions
- Trying to join a room you're already in
- Creating duplicate rooms (unlikely due to unique codes)

### Permission Errors
- Non-host trying to generate share link
- Accessing private room without permission

---

## Notes

1. **Room Codes:** 4-character alphanumeric codes (e.g., "AB12")
2. **Share Links:** UUID format (e.g., "550e8400-e29b-41d4-a716-446655440000")
3. **Roles:** "host" (creator) or "participant" (joined member)
4. **Room Lifecycle:** Rooms are soft-deleted (isActive: false) when last participant leaves
5. **Public vs Private:** Public rooms allow anyone with link, private rooms check allowedEmails

---

## WebSocket Connection (Future)

After joining a room, connect to WebSocket for real-time collaboration:

```javascript
const ws = new WebSocket(`ws://localhost:4000?room=${roomCode}&userId=${userId}`);
```

This enables:
- Real-time document editing
- Cursor position sharing
- Presence awareness
- Live updates
