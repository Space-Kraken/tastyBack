/*
  Warnings:

  - You are about to drop the column `scholarshiptype` on the `Scholarships` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Scholarships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Scholarships` DROP COLUMN `scholarshiptype`,
    ADD COLUMN `typeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `ScholarshipType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Scholarships` ADD FOREIGN KEY (`typeId`) REFERENCES `ScholarshipType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
