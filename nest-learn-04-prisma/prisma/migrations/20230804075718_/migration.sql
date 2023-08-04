/*
  Warnings:

  - Added the required column `content` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumb` to the `article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `thumb` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tittle` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
