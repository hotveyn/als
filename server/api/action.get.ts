import { faker } from "@faker-js/faker";

export default defineEventHandler(async (e) => {
  return [
    {
      id: 1,
      name: faker.lorem.word({
        length: 20,
      }),
    },
    {
      id: 2,
      name: faker.lorem.word({
        length: 20,
      }),
    },
    {
      id: 3,
      name: faker.lorem.word({
        length: 20,
      }),
    },
  ];
});
