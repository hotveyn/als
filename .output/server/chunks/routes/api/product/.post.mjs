import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _post = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.product.create({ data: body });
});

export { _post as default };
//# sourceMappingURL=.post.mjs.map
