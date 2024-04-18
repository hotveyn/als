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
  return await prisma.product.update({ where: { id }, data: body });
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
