import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import * as v from 'valibot';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _patch = defineEventHandler(async (e) => {
  const schema = v.object({
    name: v.number()
  });
  const body = await readBody(e);
  const parseResult = v.safeParse(schema, body);
  if (parseResult.success === false) {
    return { errors: parseResult.issues.map((issue) => issue.message) };
  }
  return await prisma.param.update({ where: { type: "euro" }, data: body });
});

export { _patch as default };
//# sourceMappingURL=.patch.mjs.map
