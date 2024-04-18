import { d as defineEventHandler, g as getRouterParam, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _id__get = defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));
  return await prisma.group.findUnique({
    where: {
      id
    }
  });
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
