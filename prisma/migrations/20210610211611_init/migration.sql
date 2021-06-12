-- CreateTable
CREATE TABLE `Requester` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `gender` VARCHAR(1) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `controlnumber` VARCHAR(8) NOT NULL,
    `semester` VARCHAR(1) NOT NULL,
    `carrer` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Requester.controlnumber_unique`(`controlnumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scholarships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scholarshiptype` VARCHAR(30) NOT NULL,
    `requesterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(255) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `scholarshipId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Scholarships` ADD FOREIGN KEY (`requesterId`) REFERENCES `Requester`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Files` ADD FOREIGN KEY (`scholarshipId`) REFERENCES `Scholarships`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
