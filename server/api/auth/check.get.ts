import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const token = getCookie(e, "token");

  if (
    token &&
    (await prisma.token.findUnique({
      where: {
        token,
      },
    }))
  )
    return true;

  return false;
});
