-- CreateTable
CREATE TABLE "PhyicalTicketPayment" (
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

    CONSTRAINT "PhyicalTicketPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhyicalTicketPayment_reference_key" ON "PhyicalTicketPayment"("reference");

-- CreateIndex
CREATE INDEX "PhyicalTicketPayment_externalUserId_idx" ON "PhyicalTicketPayment"("externalUserId");

-- CreateIndex
CREATE INDEX "PhyicalTicketPayment_scheduleId_idx" ON "PhyicalTicketPayment"("scheduleId");

-- AddForeignKey
ALTER TABLE "PhyicalTicketPayment" ADD CONSTRAINT "PhyicalTicketPayment_externalUserId_fkey" FOREIGN KEY ("externalUserId") REFERENCES "User"("externalUserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhyicalTicketPayment" ADD CONSTRAINT "PhyicalTicketPayment_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
