import { d as defineEventHandler, g as getRouterParam, c as createError, e as readMultipartFormData, p as prisma } from '../../../runtime.mjs';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _name__post = defineEventHandler(async (e) => {
  let name = getRouterParam(e, "name");
  if (!name)
    return createError({ statusCode: 400 });
  const file = await readMultipartFormData(e);
  if (!file)
    return;
  console.log(file[0]);
  name = name + ".png";
  const image = await prisma.image.findFirst({ where: { name } });
  if (image)
    return createError({ statusCode: 400 });
  await fs.writeFile(resolve("public/uploads/", name), file[0].data);
  await prisma.image.create({
    data: { name }
  });
  return name;
});

export { _name__post as default };
//# sourceMappingURL=_name_.post.mjs.map
