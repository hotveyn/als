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
  var _a;
  const lastOrders = await ((_a = prisma) == null ? void 0 : _a.lastOrder.findMany({
    orderBy: {
      priority: "asc"
    }
  }));
  return lastOrders;
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
