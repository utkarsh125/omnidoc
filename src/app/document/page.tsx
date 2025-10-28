import { Suspense } from "react";
import DocumentEditorClient from "./DocumentEditorClient";

export default function DocumentPage() {
  return (
    <Suspense fallback={
      <div className="bg-white shadow-sm min-h-250 mt-14 rounded-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-gray-500">Loading document...</p>
      </div>
    }>
      <DocumentEditorClient />
    </Suspense>
  );
}
