/*
  Warnings:

  - You are about to drop the column `eventDate` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `eventDateTime` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "eventDate",
DROP COLUMN "startTime",
ADD COLUMN     "artists" TEXT,
ADD COLUMN     "eventDateTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isFree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "organizers" TEXT,
ADD COLUMN     "thumbnailImage" TEXT,
ADD COLUMN     "thumbnailVideo" TEXT;
