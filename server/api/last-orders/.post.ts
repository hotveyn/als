import * as v from 'valibot'
import { prisma } from '~/server/plugins/prisma.plugin';

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  return await prisma.lastOrder.create({ data: body })
});