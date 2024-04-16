-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_name" TEXT,
    "priority" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "actions_image_name_fkey" FOREIGN KEY ("image_name") REFERENCES "images" ("name") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_actions" ("created_at", "description", "id", "image_name", "name", "priority", "time", "title", "updated_at") SELECT "created_at", "description", "id", "image_name", "name", "priority", "time", "title", "updated_at" FROM "actions";
DROP TABLE "actions";
ALTER TABLE "new_actions" RENAME TO "actions";
CREATE TABLE "new_actions_conditions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "actions_conditions_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "actions" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_actions_conditions" ("action_id", "created_at", "id", "text", "updated_at") SELECT "action_id", "created_at", "id", "text", "updated_at" FROM "actions_conditions";
DROP TABLE "actions_conditions";
ALTER TABLE "new_actions_conditions" RENAME TO "actions_conditions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
