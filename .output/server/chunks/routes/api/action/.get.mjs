import { d as defineEventHandler, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _get = defineEventHandler(async (e) => {
  return await prisma.action.findMany({
    orderBy: {
      priority: "desc"
    },
    include: {
      conditions: true
    }
  });
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
