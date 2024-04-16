import * as v from "valibot";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  const schema = v.object({
    name: v.optional(
      v.string([
        v.minLength(
          3,
          "Длина названия группы должна быть минимум из 3 символов",
        ),
        v.maxLength(255, "Длина название группы превышает 255 символов"),
      ]),
    ),
  });

  const body = await readBody(e);

  const parseResult = v.safeParse(schema, body);

  if (parseResult.success === false) {
    return { errors: parseResult.issues.map((issue) => issue.message) };
  }

  return await prisma.group.update({ where: { id }, data: body });
});
