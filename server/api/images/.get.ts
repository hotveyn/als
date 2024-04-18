import { faker } from "@faker-js/faker";
import { prisma } from "../../prisma";

export default defineEventHandler(async (e) => {
  const lastOrders = await prisma?.image.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return lastOrders;
});
