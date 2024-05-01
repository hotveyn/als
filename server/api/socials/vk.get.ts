import { prisma } from "~/server/prisma";

export default defineEventHandler(async () => {
  return await prisma.param.findUnique({
    where: {
      type: "vk",
    },
  });
});
