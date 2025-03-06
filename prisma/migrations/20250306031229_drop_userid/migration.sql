/*
  Warnings:

  - You are about to drop the column `userId` on the `ScheduleFileUpload` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ScheduleFileUpload_userId_idx";

-- AlterTable
ALTER TABLE "ScheduleFileUpload" DROP COLUMN "userId";
