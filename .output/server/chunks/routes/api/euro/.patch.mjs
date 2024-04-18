import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import * as v from 'valibot';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

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
