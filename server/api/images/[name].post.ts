import fs from "node:fs/promises";
import { v4 } from "uuid";
import { resolve } from "node:path";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  let name = getRouterParam(e, "name");
  if (!name) return createError({ statusCode: 400 });

  const file = await readMultipartFormData(e);

  if (!file) return;
  console.log(file[0]);

  name = name + ".png";

  const image = await prisma.image.findFirst({ where: { name } });

  if (image) return createError({ statusCode: 400 });

  await fs.writeFile(resolve("public/uploads/", name), file[0].data);
  await prisma.image.create({
    data: { name },
  });
  return name;
});
