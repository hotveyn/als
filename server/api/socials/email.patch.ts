import * as v from "valibot";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  return await prisma.param.update({ where: { type: "email" }, data: body });
});
