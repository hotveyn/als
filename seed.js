import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
(async function () {
  for (let i = 0; i < 50; i++) {
    await prisma.product.create({
      data: {
        imgLink: faker.image.url(),
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
        imgLink: faker.image.url(),
        name: faker.lorem.word(),
        vkLink: faker.image.url(),
        price: faker.number.int({ max: 50000 }),
      },
    });
  }
})();
