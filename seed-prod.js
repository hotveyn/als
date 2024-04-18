import { PrismaClient } from "@prisma/client";

(async () => {
  const prisma = new PrismaClient();

  async function initParams() {
    try {
      await prisma.group.createMany({
        data: [
          {
            name: "Кросовки",
          },
          {
            name: "Кросовки",
          },
          {
            name: "Кросовки",
          },
          {
            name: "Кросовки",
          },
        ],
      });
    } catch (e) {
      // console.log("euro");
    }
    try {
      await prisma.param.create({
        data: {
          type: "euro",
          value: "100",
        },
      });
    } catch (e) {
      // console.log("euro");
    }
    try {
      await prisma.param.create({
        data: {
          type: "email",
          value: "aboba@mail.com",
        },
      });
    } catch (e) {
      // console.log("email");
    }
    try {
      await prisma.param.create({
        data: {
          type: "vk",
          value: "https://vk.com",
        },
      });
    } catch (e) {
      // console.log("vk");
    }
    try {
      await prisma.param.create({
        data: {
          type: "telegram",
          value: "https://t.me/",
        },
      });
    } catch (e) {
      // console.log("telegram");
    }
  }

  initParams();
})();
