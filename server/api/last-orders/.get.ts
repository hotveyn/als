import { faker } from "@faker-js/faker";
import { prisma } from "../../plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const lastOrders = await prisma?.lastOrder.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  return lastOrders;
});
