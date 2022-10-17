// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { allPostsQuery } from '../../../utils/queries'

{/** type script */}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const query = allPostsQuery() // utils 包里面创建好了的const, return all the videos

    const data = await client.fetch(query)

    res.status(200).json(data)
  }
}
