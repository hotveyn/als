import { d as defineEventHandler, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _get = defineEventHandler(async () => {
  return await prisma.param.findUnique({
    where: {
      type: "euro"
    }
  });
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
