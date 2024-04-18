import { d as defineEventHandler } from '../../../runtime.mjs';
import { p as prisma } from '../../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _get = defineEventHandler(async () => {
  return await prisma.$queryRaw`
    SELECT DISTINCT g.*
    FROM groups g
    INNER JOIN products p on p.group_id = g.id
    ORDER BY created_at DESC
  `;
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
