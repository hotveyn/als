import { faker } from "@faker-js/faker";
import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const id = Number(getRouterParam(e, "id"));

  const action = await prisma.action.findUnique({
    where: {
      id,
    },
    include: {
      conditions: true,
    },
  });

  console.log(action);

  return action;
});
