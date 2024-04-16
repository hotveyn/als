-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_name" TEXT DEFAULT 'default',
    "vk_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "sale_price" REAL NOT NULL,
    "sale" REAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "products_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("created_at", "groupId", "id", "image_name", "name", "price", "sale", "sale_price", "updated_at", "vk_link") SELECT "created_at", "groupId", "id", "image_name", "name", "price", "sale", "sale_price", "updated_at", "vk_link" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE TABLE "new_last_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_name" TEXT DEFAULT 'default',
    "name" TEXT NOT NULL,
    "vk_link" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_last_orders" ("created_at", "id", "image_name", "name", "price", "priority", "updated_at", "vk_link") SELECT "created_at", "id", "image_name", "name", "price", "priority", "updated_at", "vk_link" FROM "last_orders";
DROP TABLE "last_orders";
ALTER TABLE "new_last_orders" RENAME TO "last_orders";
CREATE TABLE "new_actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_name" TEXT DEFAULT 'default',
    "priority" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_actions" ("created_at", "description", "id", "image_name", "name", "priority", "time", "title", "updated_at") SELECT "created_at", "description", "id", "image_name", "name", "priority", "time", "title", "updated_at" FROM "actions";
DROP TABLE "actions";
ALTER TABLE "new_actions" RENAME TO "actions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
