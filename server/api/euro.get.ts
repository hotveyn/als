import { faker } from "@faker-js/faker";

export default defineEventHandler(() =>
  faker.number.float({ max: 200, fractionDigits: 3 }),
);
