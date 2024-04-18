import { faker } from "@faker-js/faker";
import { prisma } from "../../prisma";

export default defineEventHandler(async (e) => {
  const lastOrders = await prisma?.lastOrder.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  return lastOrders;
});
