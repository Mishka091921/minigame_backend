-- AlterTable
ALTER TABLE `ChargeHistory` ADD COLUMN `approved_by` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `ChargeHistory` ADD CONSTRAINT `ChargeHistory_approved_by_fkey` FOREIGN KEY (`approved_by`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
