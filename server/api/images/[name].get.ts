import { faker } from "@faker-js/faker";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const name = getRouterParam(e, "name");

  return await prisma.image.findUnique({
    where: {
      name,
    },
  });
});
