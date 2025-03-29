/*
  Warnings:

  - A unique constraint covering the columns `[streamId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `streamId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_streamId_fkey";

-- DropIndex
DROP INDEX "Schedule_streamId_key";

-- DropIndex
DROP INDEX "Stream_scheduleId_key";

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "isLive" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "streamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "streamId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_streamId_key" ON "User"("streamId");

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
