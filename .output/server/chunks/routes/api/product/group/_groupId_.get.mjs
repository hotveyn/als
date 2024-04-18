import { d as defineEventHandler, g as getRouterParam, c as createError, p as prisma } from '../../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _groupId__get = defineEventHandler(async (e) => {
  var _a;
  const groupId = Number(getRouterParam(e, "groupId"));
  if (!groupId)
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid groupId param"
    });
  return await ((_a = prisma) == null ? void 0 : _a.product.findMany({
    where: {
      groupId
    },
    orderBy: {
      createdAt: "asc"
    }
  }));
});

export { _groupId__get as default };
//# sourceMappingURL=_groupId_.get.mjs.map
