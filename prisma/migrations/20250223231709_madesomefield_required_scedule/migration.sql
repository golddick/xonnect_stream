/*
  Warnings:

  - Made the column `title` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventDateTime` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "eventDateTime" SET NOT NULL;
