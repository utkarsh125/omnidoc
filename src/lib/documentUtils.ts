/**
 * Formats a Date object into a readable time string (e.g., "10:30 AM").
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const fetchDocumentAPI = async (documentId: string | null) => {
    if (documentId == null) {
      throw new Error("documentId null")
    }
    if (documentId == "") {
      throw new Error("documentId empty")
    }
    const response = await fetch(`api/documents/${documentId}`);
    if (!response.ok || response.status != 200) {
        throw new Error("Failed to fetch document")
    }
    return response.json();
};

export const createDocumentAPI = async (title: string, content: string) => {
    const response = await fetch("/api/documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok || response.status != 201) {
      throw new Error("Failed to create document");
    }
    
    return response.json();
}

export const updateDocumentContentAPI = async (documentId: string, content: string) => {
  const response = await fetch(`/api/documents/${documentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Failed to update document content");
  }
}

export const renameDocumentAPI = async (documentId: string, title: string) => {
    const response = await fetch(`/api/documents/${documentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
  
    if (!response.ok) {
        throw new Error("Failed to rename document");
    }
}
