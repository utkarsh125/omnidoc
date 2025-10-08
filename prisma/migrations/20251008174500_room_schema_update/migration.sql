/*
  Warnings:

  - A unique constraint covering the columns `[shareLink]` on the table `Room` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Room" ADD COLUMN     "allowedEmails" TEXT[],
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shareLink" TEXT,
ADD COLUMN     "shareLinkExpiresAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Room_shareLink_key" ON "public"."Room"("shareLink");
