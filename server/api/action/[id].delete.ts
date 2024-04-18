import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  return await prisma.action.delete({ where: { id } });
});