import { json, LoaderFunctionArgs } from "@remix-run/node";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const url = new URL(request.url);
  const xStr = url.searchParams.get('x');

  const x = Number(xStr);

  if (isNaN(x)) {
    return json({ error: 'Invalid parameters. x should be a number.' }, { status: 400 });
  }

  const result = x ** 0.5;
  
  // Save in database
  await prisma.operation.create({
    data: {
      type: 'sqrt',
      x: x,
      y: 0,
      result: result,
    },
  });

  return json({ result });
}