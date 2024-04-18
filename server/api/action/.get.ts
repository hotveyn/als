import { faker } from "@faker-js/faker";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  return await prisma.action.findMany({
    orderBy: {
      priority: "desc",
    },
    include:{
      conditions: true
    }
  });
});
