/*
  Warnings:

  - Made the column `name` on table `Coin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Coin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `current_price` on table `Coin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Coin" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "current_price" SET NOT NULL;
