import { d as defineEventHandler, g as getRouterParam, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _id__delete = defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));
  return await prisma.product.delete({ where: { id } });
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
