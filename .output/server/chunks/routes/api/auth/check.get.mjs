import { d as defineEventHandler, a as getCookie } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const check_get = defineEventHandler(async (e) => {
  const token = getCookie(e, "token");
  if (token && await prisma.token.findUnique({
    where: {
      token
    }
  }))
    return true;
  return false;
});

export { check_get as default };
//# sourceMappingURL=check.get.mjs.map
