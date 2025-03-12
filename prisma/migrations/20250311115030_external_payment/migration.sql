-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_externalUserId_fkey";

-- CreateIndex
CREATE INDEX "Payment_externalUserId_idx" ON "Payment"("externalUserId");

-- CreateIndex
CREATE INDEX "Payment_scheduleId_idx" ON "Payment"("scheduleId");

-- CreateIndex
CREATE INDEX "Payment_streamId_idx" ON "Payment"("streamId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_externalUserId_fkey" FOREIGN KEY ("externalUserId") REFERENCES "User"("externalUserId") ON DELETE CASCADE ON UPDATE CASCADE;
