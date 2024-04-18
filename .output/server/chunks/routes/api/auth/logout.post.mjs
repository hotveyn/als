import { d as defineEventHandler, a as getCookie, b as deleteCookie } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const logout_post = defineEventHandler(async (e) => {
  const token = getCookie(e, "token");
  if (token) {
    await prisma.token.delete({
      where: {
        token
      }
    }).catch((e2) => {
      console.log("\u043F\u043E\u043F\u044B\u0442\u0430\u043B\u0441\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u043A\u0435\u043D \u0430 \u0435\u0433\u043E \u0438 \u043D\u0435\u0442 xD");
    });
    deleteCookie(e, "token");
  }
  return void 0;
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
