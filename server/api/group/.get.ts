import { Group } from "@prisma/client";
import { prisma } from "../../prisma";

export interface ProductGroup {
  id: number;
  name: string;
}

export default defineEventHandler(async (): Promise<Group[]> => {
  return await prisma.$queryRaw<Group[]>`
    SELECT DISTINCT g.*
    FROM groups g
    INNER JOIN products p on p.group_id = g.id
    ORDER BY created_at DESC
  `;
});
