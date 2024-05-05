import fs from "node:fs/promises";
import { resolve } from "node:path";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const name = getRouterParam(e, "name");

  if (!name) return createError({ statusCode: 404 });

  const image = await prisma.image.findUnique({ where: { name } });

  console.dir(image);

  if (!image) return createError({ statusCode: 404 });
  try {
    await prisma.image.deleteMany({ where: { name: image.name } });
    await fs.unlink(resolve("uploads/", name));
  } catch (e) {
    console.error(e);
    return createError({ statusCode: 500 });
  }
});
