import * as v from 'valibot'
import { prisma } from '~/server/prisma';

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  console.dir(body)
  return await prisma.action.create({
    data: {
      name: body.name,
      description: body.description,
      priority: body.priority,
      time: body.time,
      title: body.time,
      conditions: {
        createMany: {
          data: body.conditions.map((c: string) => {
            return {
              text: c
            }
          })
        }
      }
    }
  })

});