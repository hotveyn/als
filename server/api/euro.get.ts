import { faker } from "@faker-js/faker";
import { prisma } from "../plugins/prisma.plugin";

export default defineEventHandler(async () => {
  return await prisma.param.findUnique({
    where: {
      type: "euro",
    },
  });
});
