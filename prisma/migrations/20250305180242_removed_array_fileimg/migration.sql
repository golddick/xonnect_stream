/*
  Warnings:

  - You are about to drop the column `VideoURL` on the `ScheduleFileUpload` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ScheduleFileUpload" DROP COLUMN "VideoURL",
ALTER COLUMN "ImageURL" SET NOT NULL,
ALTER COLUMN "ImageURL" SET DATA TYPE TEXT;
