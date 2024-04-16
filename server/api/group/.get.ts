import { Group } from "@prisma/client";
import { prisma } from "../../plugins/prisma.plugin";

export interface ProductGroup {
  id: number;
  name: string;
}

export default defineEventHandler(async (): Promise<Group[]> => {
  return await prisma.$queryRaw<Group[]>`
    SELECT DISTINCT groups.*
    FROM groups
    INNER JOIN products 
    ORDER BY created_at DESC
  `;
});
