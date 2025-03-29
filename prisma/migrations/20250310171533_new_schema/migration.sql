/*
  Warnings:

  - You are about to drop the column `isLive` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `streamId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[streamId]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[scheduleId]` on the table `Stream` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_scheduleSubscribers_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_streamSubscribers_fkey";

-- DropForeignKey
ALTER TABLE "Stream" DROP CONSTRAINT "Stream_scheduleId_fkey";

-- DropIndex
DROP INDEX "User_streamId_key";

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "isLive";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "streamId";

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_streamId_key" ON "Schedule"("streamId");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_scheduleId_key" ON "Stream"("scheduleId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE SET NULL ON UPDATE CASCADE;
