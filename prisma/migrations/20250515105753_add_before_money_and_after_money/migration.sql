-- AlterTable
ALTER TABLE `ChargeHistory` ADD COLUMN `after_money` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `before_money` INTEGER NOT NULL DEFAULT 0;
