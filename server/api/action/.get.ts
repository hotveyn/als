import { faker } from "@faker-js/faker";
import { prisma } from "~/server/plugins/prisma.plugin";

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
