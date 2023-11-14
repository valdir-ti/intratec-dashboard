import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  return new Response(JSON.stringify({message: 'Hello from Next.js!'}))
}

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    return new Response(JSON.stringify({message: 'Hello POST from Next.js!'}))
}