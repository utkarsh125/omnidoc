"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AUTOSAVE_INTERVAL, LOCAL_STORAGE_KEY_UNSAVED } from "@/constants";
import {
  fetchDocumentAPI,
  createDocumentAPI,
  updateDocumentContentAPI,
  renameDocumentAPI,
} from "@/lib/documentUtils";
import { useOnlineStatus } from "./use-online-status";

export function useDocument() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const documentId = searchParams.get("document");
  const isOnline = useOnlineStatus();

  const [content, setContent] = useState<string>("");
  const [documentName, setDocumentName] = useState<string>("Untitled Document");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isLoading, setIsLoading] = useState(!!documentId);

  // Fetch document data on initial load or when documentId changes
  useEffect(() => {
    const loadDocument = async () => {
      if (!documentId) {
        const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY_UNSAVED);
        if (savedContent) {
          setContent(savedContent);
        }
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const document = await fetchDocumentAPI(documentId);
        setContent(document.content || "");
        setDocumentName(document.title || "Untitled Document");
        setLastSaved(new Date(document.updatedAt));
      } catch (error) {
        console.error("Failed to fetch document:", error);
        const backup = localStorage.getItem(`document-${documentId}-backup`);
        if (backup) {
          setContent(backup);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadDocument();
  }, [documentId]);
  
  // Central save handler
  const handleSave = useCallback(async () => {
    if (!content) return;
  
    setIsSaving(true);
    try {
      if (!documentId) {
        if (!isOnline) throw new Error("Cannot create document offline");
  
        const newDoc = await createDocumentAPI(documentName, content);
        router.push(`/document?document=${newDoc.id}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY_UNSAVED);
      } else {
        if (isOnline) {
          await updateDocumentContentAPI(documentId, content);
          localStorage.removeItem(`document-${documentId}-backup`);
        } else {
          localStorage.setItem(`document-${documentId}-backup`, content);
        }
      }
  
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Failed to save:", error);
      const key = documentId ? `document-${documentId}-backup` : LOCAL_STORAGE_KEY_UNSAVED;
      localStorage.setItem(key, content);
      setLastSaved(new Date());
    } finally {
      setIsSaving(false);
    }
  }, [content, documentId, documentName, isOnline, router]);

  // Auto-save effect
  useEffect(() => {
    if (!hasUnsavedChanges || !documentId || !isOnline) return;

    const timer = setTimeout(() => {
      handleSave();
    }, AUTOSAVE_INTERVAL);

    return () => clearTimeout(timer);
  }, [hasUnsavedChanges, documentId, isOnline, handleSave]);

  // Handle content changes from the editor
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setHasUnsavedChanges(true);
    const key = documentId ? `document-${documentId}-backup` : LOCAL_STORAGE_KEY_UNSAVED;
    localStorage.setItem(key, newContent);
  };

  // Handle document renaming
  const handleRename = async (newName: string) => {
    setDocumentName(newName);
    if (documentId) {
      try {
        await renameDocumentAPI(documentId, newName);
      } catch (error) {
        console.error("Failed to rename:", error);
      }
    }
  };

  // Handle deleting an unsaved local draft
  const handleDeleteUnsaved = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY_UNSAVED);
    setContent("");
    setDocumentName("Untitled Document");
  };

  return {
    documentId,
    content,
    documentName,
    isSaving,
    isLoading,
    lastSaved,
    hasUnsavedChanges,
    isOnline,
    handleSave,
    handleContentChange,
    handleRename,
    handleDeleteUnsaved,
  };
}