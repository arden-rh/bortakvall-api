/*
  Warnings:

  - You are about to drop the column `customer_last_anem` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_last_name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `customer_last_anem`,
    ADD COLUMN `customer_last_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `description` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);
