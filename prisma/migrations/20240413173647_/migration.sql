/*
  Warnings:

  - You are about to drop the column `sub_title` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `actions` table. All the data in the column will be lost.
  - Added the required column `name` to the `actions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tittle` to the `actions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "image_name" TEXT,
    "priority" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "actions_image_name_fkey" FOREIGN KEY ("image_name") REFERENCES "images" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_actions" ("created_at", "id", "image_name", "priority", "time", "updated_at") SELECT "created_at", "id", "image_name", "priority", "time", "updated_at" FROM "actions";
DROP TABLE "actions";
ALTER TABLE "new_actions" RENAME TO "actions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
