import { d as defineEventHandler, r as readBody, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _post = defineEventHandler(async (e) => {
  const body = await readBody(e);
  console.dir(body);
  return await prisma.action.create({
    data: {
      name: body.name,
      description: body.description,
      priority: body.priority,
      time: body.time,
      title: body.time,
      conditions: {
        createMany: {
          data: body.conditions.map((c) => {
            return {
              text: c
            };
          })
        }
      }
    }
  });
});

export { _post as default };
//# sourceMappingURL=.post.mjs.map
