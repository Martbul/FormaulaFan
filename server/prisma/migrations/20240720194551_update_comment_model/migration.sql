-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "saves" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shares" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
