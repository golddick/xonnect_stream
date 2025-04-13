/*
  Warnings:

  - You are about to drop the `PhyicalTicketPayment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PhyicalTicketPayment" DROP CONSTRAINT "PhyicalTicketPayment_externalUserId_fkey";

-- DropForeignKey
ALTER TABLE "PhyicalTicketPayment" DROP CONSTRAINT "PhyicalTicketPayment_scheduleId_fkey";

-- DropTable
DROP TABLE "PhyicalTicketPayment";

-- CreateTable
CREATE TABLE "physicalTicketPayment" (
    "id" TEXT NOT NULL,
    "externalUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "reference" TEXT,
    "scheduleId" TEXT,
    "status" "SUBSCRIPTION_STATUS" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "physicalTicketPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "physicalTicketPayment_reference_key" ON "physicalTicketPayment"("reference");

-- CreateIndex
CREATE INDEX "physicalTicketPayment_externalUserId_idx" ON "physicalTicketPayment"("externalUserId");

-- CreateIndex
CREATE INDEX "physicalTicketPayment_scheduleId_idx" ON "physicalTicketPayment"("scheduleId");

-- AddForeignKey
ALTER TABLE "physicalTicketPayment" ADD CONSTRAINT "physicalTicketPayment_externalUserId_fkey" FOREIGN KEY ("externalUserId") REFERENCES "User"("externalUserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physicalTicketPayment" ADD CONSTRAINT "physicalTicketPayment_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
