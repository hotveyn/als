import { d as defineEventHandler, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _get = defineEventHandler(async (e) => {
  var _a;
  const lastOrders = await ((_a = prisma) == null ? void 0 : _a.image.findMany({
    orderBy: {
      createdAt: "desc"
    }
  }));
  return lastOrders;
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
