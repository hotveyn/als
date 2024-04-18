import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _id__delete = defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));
  return await prisma.product.delete({ where: { id } });
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
