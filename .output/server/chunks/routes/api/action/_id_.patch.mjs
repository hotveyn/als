import { d as defineEventHandler, g as getRouterParam, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _id__patch = defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));
  const body = await readBody(e);
  if (body.conditions && body.conditions.length) {
    await prisma.actionCondition.deleteMany({ where: { actionId: id } });
    await prisma.actionCondition.createMany({
      data: body.conditions.map((c) => ({ text: c, actionId: id }))
    });
  }
  return await prisma.action.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      priority: body.priority,
      time: body.time,
      title: body.time
    }
  });
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
