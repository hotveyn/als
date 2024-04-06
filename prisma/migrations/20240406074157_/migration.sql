-- CreateTable
CREATE TABLE "last_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img_link" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img_link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "sale_price" REAL NOT NULL,
    "sale" REAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    CONSTRAINT "products_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "params" (
    "type" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);
