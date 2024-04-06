import { faker } from "@faker-js/faker";
import { Product } from "@prisma/client";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e): Promise<Product[]> => {
  const groupId = Number(getRouterParam(e, "groupId"));

  if (!groupId)
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid groupId param",
    });

  return await prisma?.product.findMany({
    where: {
      groupId,
    },
  });

  // return [
  //   {
  // id: faker.number.int(),
  // imgLink: faker.image.url(),
  // name: faker.lorem.word(),
  // price: faker.number.int({ max: 50000 }),
  // salePrice: faker.number.int({ max: 50000 }),
  // sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     name: faker.lorem.word(),
  //     price: faker.number.int({ max: 50000 }),
  //     salePrice: faker.number.int({ max: 50000 }),
  //     sale: faker.number.int({ max: 100, min: 0 }),
  //   },
  // ];
});
