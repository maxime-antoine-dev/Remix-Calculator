import { json, LoaderFunctionArgs } from "@remix-run/node";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const operations = await prisma.operation.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return json({ operations });
}