/*
  Warnings:

  - A unique constraint covering the columns `[enrollmentId]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "addresses_enrollmentId_key" ON "addresses"("enrollmentId");
