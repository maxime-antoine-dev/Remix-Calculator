import { json, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const url = new URL(request.url);
  const aStr = url.searchParams.get('a');
  const bStr = url.searchParams.get('b');

  const a = Number(aStr);
  const b = Number(bStr);

  if (isNaN(a) || isNaN(b)) {
    return json({ error: 'Invalid parameters. Both a and b should be numbers.' }, { status: 400 });
  }

  const result = a + b;

  return json({ result });
}