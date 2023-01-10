/*
  Warnings:

  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
ALTER COLUMN "cod_recipe" DROP DEFAULT,
ALTER COLUMN "cod_recipe" SET DATA TYPE TEXT,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("cod_recipe");
DROP SEQUENCE "Recipe_cod_recipe_seq";
