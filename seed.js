import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
(async function () {
  // await prisma.image.create({
  //   data: {
  //     name: "default",
  //   },
  // });
  for (let i = 0; i < 50; i++) {
    await prisma.product.create({
      data: {
        vkLink: faker.image.url(),
        name: faker.lorem.word(),
        price: faker.number.int({ max: 50000 }),
        salePrice: faker.number.int({ max: 50000 }),
        sale: faker.number.int({ max: 100, min: 0 }),
        groupId: faker.number.int({ max: 4, min: 1 }),
      },
    });
    await prisma.lastOrder.create({
      data: {
        imageName: "default",
        name: faker.lorem.word(),
        priority: faker.number.int({ max: 50000 }),
        vkLink: faker.image.url(),
        price: faker.number.int({ max: 50000 }),
      },
    });
    await prisma.action.create({
      data: {
        name: faker.lorem.word(),
        title: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        priority: faker.number.int({ max: 50000 }),
        time: faker.lorem.word(),
        conditions: {
          create: [
            {
              text: faker.lorem.paragraph(),
            },
            {
              text: faker.lorem.paragraph(),
            },
            {
              text: faker.lorem.paragraph(),
            },
          ],
        },
      },
    });
  }
})();
