import { d as defineEventHandler, g as getRouterParam, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _name__get = defineEventHandler(async (e) => {
  const name = getRouterParam(e, "name");
  return await prisma.image.findUnique({
    where: {
      name
    }
  });
});

export { _name__get as default };
//# sourceMappingURL=_name_.get.mjs.map
