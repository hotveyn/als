import { prisma } from "~/server/prisma";

export default defineEventHandler(async (e) => {
  const token = getCookie(e, "token");

  if (token) {
    await prisma.token
      .delete({
        where: {
          token,
        },
      })
      .catch((e) => {
        console.log("попытался удалить токен а его и нет xD");
      });

    deleteCookie(e, "token");
  }
  return undefined;
});
