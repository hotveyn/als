import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import * as v from 'valibot';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _post = defineEventHandler(async (e) => {
  const schema = v.object({
    name: v.string([
      v.minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),
      v.maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
    ])
  });
  const body = await readBody(e);
  const parseResult = v.safeParse(schema, body);
  if (parseResult.success === false) {
    return { errors: parseResult.issues.map((issue) => issue.message) };
  }
  return await prisma.group.create({ data: body });
});

export { _post as default };
//# sourceMappingURL=.post.mjs.map
