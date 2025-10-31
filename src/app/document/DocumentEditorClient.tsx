"use client";

import React from "react";
import { FloppyDiskBackIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import Editor from "./editor";
import { DocumentActions } from "./DocumentActions";
import "./print-styles.css";
import { formatTime } from "@/lib/documentUtils";
import { useDocument } from "@/hooks/use-document";

export default function DocumentEditorClient() {
  const {
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
  } = useDocument();

  const handleExportPdf = () => window.print();

  const lastSavedDisplay = lastSaved
    ? `${formatTime(lastSaved)} ${!isOnline ? "(offline)" : ""}`
    : "Not saved yet";

  if (isLoading) {
    return (
      <div className="bg-white shadow-sm min-h-250 mt-14 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-gray-500">Loading document...</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white shadow-sm min-h-250 mt-14 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div>
        <div className="lg:pt-5 flex items-center justify-between">
          {/* title */}
          <div className="text-lg font-medium text-gray-900">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium px-3 py-1 border-1 border-slate-300 rounded-full">
                {documentName}
              </h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-500">
                  {isSaving ? "Saving..." : `Last saved ${lastSavedDisplay}`}
                </p>
                {hasUnsavedChanges && !isSaving && (
                  <span className="text-xs text-orange-500">• Unsaved</span>
                )}
                {!isOnline && (
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                    Offline Mode
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* actions */}
          <div className="flex items-center gap-2">
            <DocumentActions
              onSave={handleSave}
              onRename={handleRename}
              onDelete={handleDeleteUnsaved}
              showDelete={!documentId}
              documentTitle={documentName}
              onExportPdf={handleExportPdf}
            />
            <SpotlightButton
              innerColor="rgb(70,70,70)"
              outerColor="rgb(20,20,20)"
              hoverInnerColor="rgb(90,90,90)"
              hoverOuterColor="rgb(40,40,40)"
              className="text-xs flex gap-1 text-gray-100"
              onClick={handleSave}
              disabled={isSaving || !hasUnsavedChanges}
            >
              <FloppyDiskBackIcon size={16} />
              {isSaving
                ? "Saving..."
                : documentId
                ? "Save"
                : "Save to Database"}
            </SpotlightButton>

            <SpotlightButton
              innerColor="rgb(200,220,255)"
              outerColor="rgb(100,150,255)"
              hoverInnerColor="rgb(180,200,255)"
              hoverOuterColor="rgb(80,130,255)"
              className="text-xs flex gap-1 text-gray-100"
            >
              <PlusCircleIcon size={16} />
              Invite
            </SpotlightButton>
          </div>
        </div>

        {/* actual editor */}
        <div className="mt-4 printable-content">
          <h1
            style={{ marginBottom: "20px", display: "none" }}
            className="document-title-print"
          >
            {documentName}
          </h1>
          <Editor
            key={documentId || "new"}
            initialContent={content}
            onContentChange={handleContentChange}
            documentId={documentId || undefined}
          />
        </div>
      </div>
    </div>
  );
}
