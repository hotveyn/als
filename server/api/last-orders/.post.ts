import * as v from 'valibot'
import { prisma } from '~/server/prisma';

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  return await prisma.lastOrder.create({ data: body })
});