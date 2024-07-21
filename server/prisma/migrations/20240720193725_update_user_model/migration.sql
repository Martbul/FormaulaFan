/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `Group` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - You are about to drop the column `imageContent` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "imageUrl" SET DEFAULT 'https://firebasestorage.googleapis.com/v0/b/formulafan-38467.appspot.com/o/racing-car.png?alt=media&token=ed7bb8b3-370f-4521-9ccb-b8cf42955271',
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(1000);

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "imageContent",
ADD COLUMN     "imageContentUrl" VARCHAR(1000);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "picture" SET DEFAULT 'https://firebasestorage.googleapis.com/v0/b/formulafan-38467.appspot.com/o/helmet.png?alt=media&token=67b3e8bc-66a5-4161-a89d-f1e5e2a14535';
