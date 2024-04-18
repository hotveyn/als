import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const vk_patch = defineEventHandler(async (e) => {
  const body = await readBody(e);
  return await prisma.param.update({ where: { type: "vk" }, data: body });
});

export { vk_patch as default };
//# sourceMappingURL=vk.patch.mjs.map
