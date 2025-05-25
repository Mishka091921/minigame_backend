-- AlterTable
ALTER TABLE `User` MODIFY `roles` ENUM('user', 'admin', 'test_player', 'developer') NOT NULL;
