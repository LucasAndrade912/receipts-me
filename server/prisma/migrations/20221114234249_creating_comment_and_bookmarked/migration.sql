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

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_userGoogle_id_fkey" FOREIGN KEY ("userGoogle_id") REFERENCES "User"("google_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarked" ADD CONSTRAINT "Bookmarked_recipeCod_recipe_fkey" FOREIGN KEY ("recipeCod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;
