import { faker } from "@faker-js/faker";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  return await prisma.product.findUnique({
    where: {
      id,
    },
  });
});
