/*
  Warnings:

  - You are about to drop the column `documentType` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `originalFileName` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `originalFileSize` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `originalFileUrl` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `originalMimeType` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `processingError` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `processingStatus` on the `Document` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Document_documentType_idx";

-- DropIndex
DROP INDEX "public"."Document_processingStatus_idx";

-- AlterTable
ALTER TABLE "public"."Document" DROP COLUMN "documentType",
DROP COLUMN "originalFileName",
DROP COLUMN "originalFileSize",
DROP COLUMN "originalFileUrl",
DROP COLUMN "originalMimeType",
DROP COLUMN "processingError",
DROP COLUMN "processingStatus",
ADD COLUMN     "allowComments" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "allowSuggestions" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "public"."DocumentImage" ADD COLUMN     "height" INTEGER,
ADD COLUMN     "width" INTEGER;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."DocumentVersion" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "changeDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "DocumentVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentCollaborators" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'editor',
    "permissions" TEXT[],
    "invitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedAt" TIMESTAMP(3),

    CONSTRAINT "DocumentCollaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentComment" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "lineNumber" INTEGER,
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentShare" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "shareToken" TEXT NOT NULL,
    "permissions" TEXT[],
    "expiresAt" TIMESTAMP(3),
    "maxUses" INTEGER,
    "useCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "DocumentShare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT NOT NULL,
    "category" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "editorTheme" TEXT NOT NULL DEFAULT 'default',
    "fontSize" INTEGER NOT NULL DEFAULT 14,
    "autoSave" BOOLEAN NOT NULL DEFAULT true,
    "autoSaveInterval" INTEGER NOT NULL DEFAULT 30,
    "showLineNumbers" BOOLEAN NOT NULL DEFAULT true,
    "wordWrap" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DocumentActivity" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "description" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocumentActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DocumentVersion_documentId_idx" ON "public"."DocumentVersion"("documentId");

-- CreateIndex
CREATE INDEX "DocumentVersion_versionNumber_idx" ON "public"."DocumentVersion"("versionNumber");

-- CreateIndex
CREATE INDEX "DocumentVersion_createdAt_idx" ON "public"."DocumentVersion"("createdAt");

-- CreateIndex
CREATE INDEX "DocumentCollaborators_documentId_idx" ON "public"."DocumentCollaborators"("documentId");

-- CreateIndex
CREATE INDEX "DocumentCollaborators_userId_idx" ON "public"."DocumentCollaborators"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentCollaborators_documentId_userId_key" ON "public"."DocumentCollaborators"("documentId", "userId");

-- CreateIndex
CREATE INDEX "DocumentComment_documentId_idx" ON "public"."DocumentComment"("documentId");

-- CreateIndex
CREATE INDEX "DocumentComment_userId_idx" ON "public"."DocumentComment"("userId");

-- CreateIndex
CREATE INDEX "DocumentComment_createdAt_idx" ON "public"."DocumentComment"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentShare_shareToken_key" ON "public"."DocumentShare"("shareToken");

-- CreateIndex
CREATE INDEX "DocumentShare_documentId_idx" ON "public"."DocumentShare"("documentId");

-- CreateIndex
CREATE INDEX "DocumentShare_shareToken_idx" ON "public"."DocumentShare"("shareToken");

-- CreateIndex
CREATE INDEX "DocumentShare_expiresAt_idx" ON "public"."DocumentShare"("expiresAt");

-- CreateIndex
CREATE INDEX "DocumentTemplate_category_idx" ON "public"."DocumentTemplate"("category");

-- CreateIndex
CREATE INDEX "DocumentTemplate_isPublic_idx" ON "public"."DocumentTemplate"("isPublic");

-- CreateIndex
CREATE INDEX "DocumentTemplate_userId_idx" ON "public"."DocumentTemplate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "public"."UserSettings"("userId");

-- CreateIndex
CREATE INDEX "UserSettings_userId_idx" ON "public"."UserSettings"("userId");

-- CreateIndex
CREATE INDEX "DocumentActivity_documentId_idx" ON "public"."DocumentActivity"("documentId");

-- CreateIndex
CREATE INDEX "DocumentActivity_userId_idx" ON "public"."DocumentActivity"("userId");

-- CreateIndex
CREATE INDEX "DocumentActivity_createdAt_idx" ON "public"."DocumentActivity"("createdAt");

-- CreateIndex
CREATE INDEX "Document_isPublic_idx" ON "public"."Document"("isPublic");

-- CreateIndex
CREATE INDEX "Document_tags_idx" ON "public"."Document"("tags");

-- CreateIndex
CREATE INDEX "Document_createdAt_idx" ON "public"."Document"("createdAt");

-- CreateIndex
CREATE INDEX "Document_updatedAt_idx" ON "public"."Document"("updatedAt");

-- CreateIndex
CREATE INDEX "DocumentImage_fileName_idx" ON "public"."DocumentImage"("fileName");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."DocumentVersion" ADD CONSTRAINT "DocumentVersion_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentCollaborators" ADD CONSTRAINT "DocumentCollaborators_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentCollaborators" ADD CONSTRAINT "DocumentCollaborators_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentComment" ADD CONSTRAINT "DocumentComment_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentComment" ADD CONSTRAINT "DocumentComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentShare" ADD CONSTRAINT "DocumentShare_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DocumentActivity" ADD CONSTRAINT "DocumentActivity_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
