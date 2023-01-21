/*
  Warnings:

  - The primary key for the `Bookmarked` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeCod_recipe` on the `Bookmarked` table. All the data in the column will be lost.
  - You are about to drop the column `userGoogle_id` on the `Bookmarked` table. All the data in the column will be lost.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeCod_recipe` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userGoogle_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userGoogle_id` on the `Recipe` table. All the data in the column will be lost.
  - The primary key for the `Recipe_Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryCod_category` on the `Recipe_Category` table. All the data in the column will be lost.
  - You are about to drop the column `recipeCod_recipe` on the `Recipe_Category` table. All the data in the column will be lost.
  - The primary key for the `Recipe_Ingredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ingredientCod_ingredient` on the `Recipe_Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `recipeCod_recipe` on the `Recipe_Ingredient` table. All the data in the column will be lost.
  - Added the required column `cod_recipe` to the `Bookmarked` table without a default value. This is not possible if the table is not empty.
  - Added the required column `google_id` to the `Bookmarked` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_recipe` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `google_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `google_id` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_category` to the `Recipe_Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_recipe` to the `Recipe_Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_ingredient` to the `Recipe_Ingredient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_recipe` to the `Recipe_Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bookmarked" DROP CONSTRAINT "Bookmarked_recipeCod_recipe_fkey";

-- DropForeignKey
ALTER TABLE "Bookmarked" DROP CONSTRAINT "Bookmarked_userGoogle_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_recipeCod_recipe_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userGoogle_id_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_userGoogle_id_fkey";

-- DropForeignKey
ALTER TABLE "Recipe_Category" DROP CONSTRAINT "Recipe_Category_categoryCod_category_fkey";

-- DropForeignKey
ALTER TABLE "Recipe_Category" DROP CONSTRAINT "Recipe_Category_recipeCod_recipe_fkey";

-- DropForeignKey
ALTER TABLE "Recipe_Ingredient" DROP CONSTRAINT "Recipe_Ingredient_ingredientCod_ingredient_fkey";

-- DropForeignKey
ALTER TABLE "Recipe_Ingredient" DROP CONSTRAINT "Recipe_Ingredient_recipeCod_recipe_fkey";

-- AlterTable
ALTER TABLE "Bookmarked" DROP CONSTRAINT "Bookmarked_pkey",
DROP COLUMN "recipeCod_recipe",
DROP COLUMN "userGoogle_id",
ADD COLUMN     "cod_recipe" TEXT NOT NULL,
ADD COLUMN     "google_id" TEXT NOT NULL,
ADD CONSTRAINT "Bookmarked_pkey" PRIMARY KEY ("google_id", "cod_recipe");

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "recipeCod_recipe",
DROP COLUMN "userGoogle_id",
ADD COLUMN     "cod_recipe" TEXT NOT NULL,
ADD COLUMN     "google_id" TEXT NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("google_id", "cod_recipe");

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "userGoogle_id",
ADD COLUMN     "google_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recipe_Category" DROP CONSTRAINT "Recipe_Category_pkey",
DROP COLUMN "categoryCod_category",
DROP COLUMN "recipeCod_recipe",
ADD COLUMN     "cod_category" TEXT NOT NULL,
ADD COLUMN     "cod_recipe" TEXT NOT NULL,
ADD CONSTRAINT "Recipe_Category_pkey" PRIMARY KEY ("cod_recipe", "cod_category");

-- AlterTable
ALTER TABLE "Recipe_Ingredient" DROP CONSTRAINT "Recipe_Ingredient_pkey",
DROP COLUMN "ingredientCod_ingredient",
DROP COLUMN "recipeCod_recipe",
ADD COLUMN     "cod_ingredient" TEXT NOT NULL,
ADD COLUMN     "cod_recipe" TEXT NOT NULL,
ADD CONSTRAINT "Recipe_Ingredient_pkey" PRIMARY KEY ("cod_recipe", "cod_ingredient");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_google_id_fkey" FOREIGN KEY ("google_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_google_id_fkey" FOREIGN KEY ("google_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_google_id_fkey" FOREIGN KEY ("google_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_cod_ingredient_fkey" FOREIGN KEY ("cod_ingredient") REFERENCES "Ingredient"("cod_ingredient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Category" ADD CONSTRAINT "Recipe_Category_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Category" ADD CONSTRAINT "Recipe_Category_cod_category_fkey" FOREIGN KEY ("cod_category") REFERENCES "Category"("cod_category") ON DELETE RESTRICT ON UPDATE CASCADE;
