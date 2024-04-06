import { Group } from "@prisma/client";
import { prisma } from "../plugins/prisma.plugin";

export interface ProductGroup {
  id: number;
  name: string;
}

export default defineEventHandler(async (): Promise<Group[]> => {
  return await prisma.$queryRaw<Group[]>`
    SELECT DISTINCT groups.*
    FROM groups
    INNER JOIN products 
  `;
  // return [
  //   {
  //     id: 1,
  //     name: "Косметика",
  //   },
  //   {
  //     id: 2,
  //     name: "Одежда",
  //   },
  //   {
  //     id: 3,
  //     name: "Обувь",
  //   },
  //   {
  //     id: 4,
  //     name: "Аксесуары",
  //   },
  // ];
});
