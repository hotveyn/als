/*
  Warnings:

  - Added the required column `priority` to the `last_orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_last_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vk_link" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_last_orders" ("id", "img_link", "name", "price", "vk_link") SELECT "id", "img_link", "name", "price", "vk_link" FROM "last_orders";
DROP TABLE "last_orders";
ALTER TABLE "new_last_orders" RENAME TO "last_orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
