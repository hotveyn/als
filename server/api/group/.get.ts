import { Group } from "@prisma/client";
import { prisma } from "../../prisma";

export interface ProductGroup {
  id: number;
  name: string;
}

export default defineEventHandler(async (): Promise<Group[]> => {
  return await prisma.group.findMany();
});
