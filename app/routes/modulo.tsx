import { json, LoaderFunctionArgs } from "@remix-run/node";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const url = new URL(request.url);
  const xStr = url.searchParams.get('x');
  const yStr = url.searchParams.get('y');

  const x = Number(xStr);
  const y = Number(yStr);

  if (isNaN(x) || isNaN(y)) {
    return json({ error: 'Invalid parameters. Both x and y should be numbers.' }, { status: 400 });
  }

  const result = x % y;
  
  // Save in database
  await prisma.operation.create({
    data: {
      type: 'modulo',
      x: x,
      y: y,
      result: result,
    },
  });

  return json({ result });
}