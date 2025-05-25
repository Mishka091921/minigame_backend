-- AlterTable
ALTER TABLE `User` ADD COLUMN `active_token` VARCHAR(191) NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `is_deleted` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `status` ENUM('active', 'withdrawn', 'suspended') NOT NULL DEFAULT 'active';
