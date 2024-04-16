import * as v from "valibot";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e) => {

  const schema = v.object({
    name: v.number(),
  });

  const body = await readBody(e);

  const parseResult = v.safeParse(schema, body);

  if (parseResult.success === false) {
    return { errors: parseResult.issues.map((issue) => issue.message) };
  }

  return await prisma.param.update({ where: { type: "euro" }, data: body });
});
