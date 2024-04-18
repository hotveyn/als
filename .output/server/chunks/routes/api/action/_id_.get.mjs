import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _id__get = defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));
  const action = await prisma.action.findUnique({
    where: {
      id
    },
    include: {
      conditions: true
    }
  });
  console.log(action);
  return action;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
