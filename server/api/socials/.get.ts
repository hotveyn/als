import { faker } from "@faker-js/faker";
import { prisma } from "../../plugins/prisma.plugin";

export default defineEventHandler(async (event) => {
  return {
    email: await prisma.param.findUnique({
      where: {
        type: "email",
      },
    }),
    vk: await prisma.param.findUnique({
      where: {
        type: "vk",
      },
    }),
    telegram: await prisma.param.findUnique({
      where: {
        type: "telegram",
      },
    }),
    euro: await prisma.param.findUnique({
      where: {
        type: "euro",
      },
    }),
  };
});
