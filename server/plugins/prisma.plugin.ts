import {  PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;

export default defineNitroPlugin(async (nitroApp) => {
  prisma = new PrismaClient();
  await initParams();
  nitroApp.hooks.hook("close", async () => {
    if (prisma) await prisma.$disconnect();
  });
});

async function initParams() {
  try {
    await prisma.param.create({
      data: {
        type: "euro",
        value: "100",
      },
    });
  } catch (e) {
    console.log("euro");
  }
  try {
    await prisma.param.create({
      data: {
        type: "email",
        value: "aboba@mail.com",
      },
    });
  } catch (e) {
    console.log("email");
  }
  try {
    await prisma.param.create({
      data: {
        type: "phone",
        value: "79646976603",
      },
    });
  } catch (e) {
    console.log("phone");
  }
  try {
    await prisma.param.create({
      data: {
        type: "vk",
        value: "https://vk.com",
      },
    });
  } catch (e) {
    console.log("vk");
  }
  try {
    await prisma.param.create({
      data: {
        type: "telegram",
        value: "https://t.me/",
      },
    });
  } catch (e) {
    console.log("telegram");
  }
}
