import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const telegram_patch = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.param.update({ where: { type: "telegram" }, data: body });
});

export { telegram_patch as default };
//# sourceMappingURL=telegram.patch.mjs.map
