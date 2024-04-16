import { Product } from "@prisma/client";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e): Promise<Product[]> => {
  const groupId = Number(getRouterParam(e, "groupId"));

  if (!groupId)
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid groupId param",
    });

  return await prisma?.product.findMany({
    where: {
      groupId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
});
