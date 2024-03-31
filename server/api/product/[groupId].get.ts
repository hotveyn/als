import { faker } from "@faker-js/faker";

export interface IProduct {
  id: number;
  imgLink: string;
  name: string;
  price: number;
  salePrice: number;
  sale: number;
}

export default defineEventHandler(async (e): Promise<IProduct[]> => {
  const groupId = getRouterParam(e, "groupId");

  return [
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
    {
      id: faker.number.int(),
      imgLink: faker.image.url(),
      name: faker.lorem.word(),
      price: faker.number.int({ max: 50000 }),
      salePrice: faker.number.int({ max: 50000 }),
      sale: faker.number.int({ max: 100, min: 0 }),
    },
  ];
});
