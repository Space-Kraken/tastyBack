/*
  Warnings:

  - Added the required column `status` to the `Scholarships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Scholarships` ADD COLUMN `status` BOOLEAN NOT NULL;
