-- CreateTable
CREATE TABLE `BettingRound` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `game_name` VARCHAR(191) NOT NULL,
    `betting_amount` INTEGER NOT NULL DEFAULT 0,
    `winning_amount` INTEGER NOT NULL DEFAULT 0,
    `betting_status` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BettingRound` ADD CONSTRAINT `BettingRound_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
