import { faker } from "@faker-js/faker";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const name = getRouterParam(e, "name");

  return await prisma.image.findUnique({
    where: {
      name,
    },
  });
});
