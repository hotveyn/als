import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const telegram_patch = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.param.update({ where: { type: "telegram" }, data: body });
});

export { telegram_patch as default };
//# sourceMappingURL=telegram.patch.mjs.map
