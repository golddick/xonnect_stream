/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orgEmail]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_email_key" ON "Payment"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_orgEmail_key" ON "Schedule"("orgEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
