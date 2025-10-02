-- AlterTable
ALTER TABLE "public"."Document" ADD COLUMN     "documentType" TEXT NOT NULL DEFAULT 'new',
ADD COLUMN     "lastEditedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "originalFileName" TEXT,
ADD COLUMN     "originalFileSize" INTEGER,
ADD COLUMN     "originalFileUrl" TEXT,
ADD COLUMN     "originalMimeType" TEXT,
ADD COLUMN     "processingError" TEXT,
ADD COLUMN     "processingStatus" TEXT NOT NULL DEFAULT 'completed';

-- CreateTable
CREATE TABLE "public"."DocumentImage" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DocumentImage_documentId_idx" ON "public"."DocumentImage"("documentId");

-- CreateIndex
CREATE INDEX "Document_documentType_idx" ON "public"."Document"("documentType");

-- CreateIndex
CREATE INDEX "Document_processingStatus_idx" ON "public"."Document"("processingStatus");

-- AddForeignKey
ALTER TABLE "public"."DocumentImage" ADD CONSTRAINT "DocumentImage_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
