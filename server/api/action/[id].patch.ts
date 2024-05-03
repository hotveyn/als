import * as v from "valibot";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  const body = await readBody(e);

  if (body.conditions && (body.conditions as string[]).length) {
    await prisma.actionCondition.deleteMany({ where: { actionId: id } });
    await prisma.actionCondition.createMany({
      data: body.conditions.map((c: string) => ({ text: c, actionId: id })),
    });
  }
  return await prisma.action.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      priority: body.priority,
      imageName: body.imageName,
      time: body.time,
      title: body.title,
    },
  });
});
