import * as v from "valibot";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  const body = await readBody(e);

  return await prisma.product.update({ where: { id }, data: body });
});
