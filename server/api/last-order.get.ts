import { faker } from "@faker-js/faker";

export default defineEventHandler(async (e) => {
  return [
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      price: faker.number.int({ max: 100000 }),
    },
  ];
});
