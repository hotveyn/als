import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const euro_patch = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.param.update({ where: { type: "euro" }, data: body });
});

export { euro_patch as default };
//# sourceMappingURL=euro.patch.mjs.map
