/*
  Warnings:

  - You are about to drop the column `imageContent` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "imageContent",
ADD COLUMN     "imageContentUrl" VARCHAR(1000);
