-- CreateTable
CREATE TABLE "User" (
    "google_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("google_id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "cod_recipe" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Comment" (
    "userGoogle_id" TEXT NOT NULL,
    "recipeCod_recipe" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("userGoogle_id","recipeCod_recipe")
);

-- CreateTable
CREATE TABLE "Bookmarked" (
    "userGoogle_id" TEXT NOT NULL,
    "recipeCod_recipe" TEXT NOT NULL,
    "date_bookmarked" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookmarked_pkey" PRIMARY KEY ("userGoogle_id","recipeCod_recipe")
);

-- CreateTable
CREATE TABLE "Category" (
    "cod_category" TEXT NOT NULL,
    "name_category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("cod_category")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "cod_ingredient" TEXT NOT NULL,
    "name_ingredient" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("cod_ingredient")
);

-- CreateTable
CREATE TABLE "Recipe_Ingredient" (
    "recipeCod_recipe" TEXT NOT NULL,
    "ingredientCod_ingredient" TEXT NOT NULL,

    CONSTRAINT "Recipe_Ingredient_pkey" PRIMARY KEY ("recipeCod_recipe","ingredientCod_ingredient")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Ingredient" ADD CONSTRAINT "Recipe_Ingredient_ingredientCod_ingredient_fkey" FOREIGN KEY ("ingredientCod_ingredient") REFERENCES "Ingredient"("cod_ingredient") ON DELETE RESTRICT ON UPDATE CASCADE;
