import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../runtime.mjs';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _name__delete = defineEventHandler(async (e) => {
  const name = getRouterParam(e, "name");
  if (!name)
    return createError({ statusCode: 404 });
  const image = await prisma.image.findUnique({ where: { name } });
  console.dir(image);
  if (!image)
    return createError({ statusCode: 404 });
  try {
    await prisma.image.deleteMany({ where: { name: image.name } });
    await fs.unlink(resolve("public/uploads/", name));
  } catch (e2) {
    console.error(e2);
    return createError({ statusCode: 500 });
  }
});

export { _name__delete as default };
//# sourceMappingURL=_name_.delete.mjs.map
