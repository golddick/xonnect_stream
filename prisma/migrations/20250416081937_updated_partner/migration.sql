/*
  Warnings:

  - You are about to drop the column `industry` on the `Partner` table. All the data in the column will be lost.
  - Added the required column `industryId` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IndustryType" AS ENUM ('ENTERTAINMENT', 'LOGISTICS', 'MANUFACTURING', 'HEALTHCARE', 'FINANCE', 'TECHNOLOGY', 'OTHER');

-- AlterTable
ALTER TABLE "Partner" DROP COLUMN "industry",
ADD COLUMN     "industryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Industry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "IndustryType" NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
