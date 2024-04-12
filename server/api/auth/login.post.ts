import { v4 } from "uuid";
import { prisma } from "~/server/plugins/prisma.plugin";

export default defineEventHandler(async (e) => {
  const { code } = await readBody(e);
  console.log(code);
  console.log(process.env.CODE);
  if (code && code === process.env.CODE) {
    const token = v4();

    await prisma.token.create({
      data: {
        token,
      },
    });

    console.log(process.env.SESSION_PASSWORD);
    setCookie(e, "token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return true;
  }

  return createError({ statusCode: 401 });
});
