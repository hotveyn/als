import { faker } from "@faker-js/faker";
import { prisma } from "../plugins/prisma.plugin";

export default defineEventHandler(async (event) => {
  return {
    email: await prisma.param.findUnique({
      where: {
        type: "email",
      },
    }),
    phone: await prisma.param.findUnique({
      where: {
        type: "phone",
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
  };
});
