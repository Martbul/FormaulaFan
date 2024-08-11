-- CreateTable
CREATE TABLE "UserAvatar3D" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "helmetColor" TEXT NOT NULL,
    "suitColor" TEXT NOT NULL,
    "glovesColor" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "UserAvatar3D_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAvatar3D_userId_key" ON "UserAvatar3D"("userId");

-- AddForeignKey
ALTER TABLE "UserAvatar3D" ADD CONSTRAINT "UserAvatar3D_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
