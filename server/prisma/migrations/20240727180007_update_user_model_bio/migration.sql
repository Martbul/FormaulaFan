/*
  Warnings:

  - You are about to drop the column `theme` on the `UserSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" VARCHAR(2550),
ADD COLUMN     "cover" TEXT NOT NULL DEFAULT '#393a3f',
ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "theme";
