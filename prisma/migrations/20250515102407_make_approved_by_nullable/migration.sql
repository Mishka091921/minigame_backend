-- DropForeignKey
ALTER TABLE `ChargeHistory` DROP FOREIGN KEY `ChargeHistory_approved_by_fkey`;

-- DropIndex
DROP INDEX `ChargeHistory_approved_by_fkey` ON `ChargeHistory`;

-- AlterTable
ALTER TABLE `ChargeHistory` MODIFY `approved_by` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ChargeHistory` ADD CONSTRAINT `ChargeHistory_approved_by_fkey` FOREIGN KEY (`approved_by`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
