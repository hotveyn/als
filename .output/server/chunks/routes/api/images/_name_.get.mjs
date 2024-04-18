import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

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
