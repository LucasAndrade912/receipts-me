/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `google_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "google_id" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("google_id");

-- CreateTable
CREATE TABLE "Recipe" (
    "cod_recipe" SERIAL NOT NULL,
    "name_recipe" TEXT NOT NULL,
    "step_by_step" TEXT NOT NULL,
    "date_register" TIMESTAMP(3) NOT NULL,
    "prep_time_min" INTEGER NOT NULL,
    "prep_time_max" INTEGER NOT NULL,
    "cape_picture" TEXT NOT NULL,
    "aditional_picture1" TEXT,
    "aditional_picture2" TEXT,
    "userGoogle_id" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("cod_recipe")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;
