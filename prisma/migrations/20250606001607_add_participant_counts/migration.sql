/*
  Warnings:

  - You are about to drop the column `perticipant` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "perticipant",
ADD COLUMN     "activeAtStreamEndCount" INTEGER,
ADD COLUMN     "participantCount" INTEGER;
