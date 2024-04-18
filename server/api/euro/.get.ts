import { faker } from "@faker-js/faker";
import { prisma } from "../../prisma";

export default defineEventHandler(async () => {
  return await prisma.param.findUnique({
    where: {
      type: "euro",
    },
  });
});
