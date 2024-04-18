import { d as defineEventHandler, p as prisma } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

const _get = defineEventHandler(async () => {
  return await prisma.$queryRaw`
    SELECT DISTINCT groups.*
    FROM groups
    INNER JOIN products 
    ORDER BY created_at DESC
  `;
});

export { _get as default };
//# sourceMappingURL=.get.mjs.map
