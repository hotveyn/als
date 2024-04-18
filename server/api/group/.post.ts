import * as v from 'valibot'
import { prisma } from '~/server/prisma';

export default defineEventHandler(async (e) => {
  const schema = v.object({
    name: v.string([
      v.minLength(3, 'Длина названия группы должна быть минимум из 3 символов'),
      v.maxLength(255, 'Длина название группы превышает 255 символов')
    ])
  })

  const body = await readBody(e)

  const parseResult = v.safeParse(schema, body)

  if (parseResult.success === false) {
    return { errors: parseResult.issues.map(issue => issue.message) }
  }

  return await prisma.group.create({ data: body })
});