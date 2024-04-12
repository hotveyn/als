/*
  Warnings:

  - Added the required column `vk_link` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `last_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vk_link` to the `last_orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img_link" TEXT NOT NULL,
    "vk_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "sale_price" REAL NOT NULL,
    "sale" REAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    CONSTRAINT "products_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("groupId", "id", "img_link", "name", "price", "sale", "sale_price") SELECT "groupId", "id", "img_link", "name", "price", "sale", "sale_price" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE TABLE "new_last_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vk_link" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_last_orders" ("id", "img_link", "price") SELECT "id", "img_link", "price" FROM "last_orders";
DROP TABLE "last_orders";
ALTER TABLE "new_last_orders" RENAME TO "last_orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
