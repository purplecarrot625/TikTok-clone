// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client'
import { allPostsQuery } from '../../utils/queries'

{/** type script, next.js handler */}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST') {

    const user = req.body

    client.createIfNotExists(user)
        .then(() => res.status(200).json('Login Success!!'))
  }
}
