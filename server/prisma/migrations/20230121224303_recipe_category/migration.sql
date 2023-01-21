-- CreateTable
CREATE TABLE "Recipe_Category" (
    "recipeCod_recipe" TEXT NOT NULL,
    "categoryCod_category" TEXT NOT NULL,

    CONSTRAINT "Recipe_Category_pkey" PRIMARY KEY ("recipeCod_recipe","categoryCod_category")
);

-- AddForeignKey
ALTER TABLE "Recipe_Category" ADD CONSTRAINT "Recipe_Category_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe_Category" ADD CONSTRAINT "Recipe_Category_categoryCod_category_fkey" FOREIGN KEY ("categoryCod_category") REFERENCES "Category"("cod_category") ON DELETE RESTRICT ON UPDATE CASCADE;
