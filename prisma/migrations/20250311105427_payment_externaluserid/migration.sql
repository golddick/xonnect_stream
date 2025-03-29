/*
  Warnings:

  - You are about to drop the column `userId` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[streamId]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalUserId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "userId",
ADD COLUMN     "externalUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_streamId_key" ON "Schedule"("streamId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_externalUserId_fkey" FOREIGN KEY ("externalUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
