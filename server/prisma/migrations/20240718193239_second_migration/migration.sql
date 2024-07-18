/*
  Warnings:

  - You are about to drop the column `foodDescription` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `foodImg` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `foodTitle` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `specials` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menuId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "special" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "foodDescription",
DROP COLUMN "foodImg",
DROP COLUMN "foodTitle",
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "menuId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" DROP NOT NULL;

-- DropTable
DROP TABLE "specials";

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
