import { d as defineEventHandler } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

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
