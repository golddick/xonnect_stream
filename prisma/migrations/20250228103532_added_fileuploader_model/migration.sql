/*
  Warnings:

  - A unique constraint covering the columns `[streamId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_streamId_fkey";

-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "scheduleId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "streamId" TEXT;

-- CreateTable
CREATE TABLE "ScheduleFileUpload" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "ImageURL" TEXT[],
    "VideoURL" TEXT[],
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduleFileUpload_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ScheduleFileUpload_userId_idx" ON "ScheduleFileUpload"("userId");

-- CreateIndex
CREATE INDEX "ScheduleFileUpload_scheduleId_idx" ON "ScheduleFileUpload"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "User_streamId_key" ON "User"("streamId");

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_scheduleSubscribers_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_streamSubscribers_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleFileUpload" ADD CONSTRAINT "ScheduleFileUpload_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
