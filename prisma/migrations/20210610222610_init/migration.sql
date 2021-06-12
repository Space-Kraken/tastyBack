/*
  Warnings:

  - You are about to drop the column `status` on the `Scholarships` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Scholarships` DROP COLUMN `status`,
    ADD COLUMN `approved` BOOLEAN NOT NULL DEFAULT false;
