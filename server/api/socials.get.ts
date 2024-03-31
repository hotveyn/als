import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  return {
    email: faker.internet.email(),
    phone: faker.phone.number(),
    vk: faker.internet.url(),
    telegram: faker.internet.url(),
  };
});
