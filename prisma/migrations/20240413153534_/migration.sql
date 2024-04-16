-- CreateTable
CREATE TABLE "actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "sub_title" TEXT NOT NULL,
    "img_link" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "time" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "actions_conditions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "actions_conditions_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "actions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
