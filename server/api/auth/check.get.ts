import { prisma } from "~/server/plugins/prisma.plugin";

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
