import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const tokenInCookie = getCookie(e, "token");

  const tokenInDB = await prisma.token.findUnique({
    where: {
      token: tokenInCookie,
    },
  });
  console.log("tokenInCookie", tokenInCookie);
  console.log("tokenInDB", tokenInDB);
  if (tokenInCookie && tokenInDB) return true;

  return false;
});
