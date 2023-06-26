/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `enrollments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "enrollments_userId_key" ON "enrollments"("userId");
