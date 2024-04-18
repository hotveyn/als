import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _post = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.lastOrder.create({ data: body });
});

export { _post as default };
//# sourceMappingURL=.post.mjs.map
