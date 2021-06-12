/*
  Warnings:

  - You are about to drop the `Requester` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Scholarships` DROP FOREIGN KEY `Scholarships_ibfk_1`;

-- DropTable
DROP TABLE `Requester`;

-- CreateTable
CREATE TABLE `Requesters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `controlnumber` VARCHAR(8) NOT NULL,
    `semester` VARCHAR(1) NOT NULL,
    `carrer` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Requesters.controlnumber_unique`(`controlnumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Scholarships` ADD FOREIGN KEY (`requesterId`) REFERENCES `Requesters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
