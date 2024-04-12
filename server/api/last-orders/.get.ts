import { faker } from "@faker-js/faker";
import { prisma } from "../../plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const lastOrders = await prisma?.lastOrder.findMany();

  return lastOrders;
  // return [
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  //   {
  //     id: faker.number.int(),
  //     imgLink: faker.image.url(),
  //     price: faker.number.int({ max: 100000 }),
  //   },
  // ];
});
