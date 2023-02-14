import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import {singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery} from '../../../utils/queries'


{/** type script, next.js handler */}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const {id} = req.query
    const query = singleUserQuery(id)
    const userVideosQuery = userCreatedPostsQuery(id)
    const userLikedVideos = userLikedPostsQuery(id)
    
    const user = await client.fetch(query)
    const userVideos = await client.fetch(userVideosQuery)
    const userLikes = await client.fetch(userLikedVideos)

    res.status(200).json({user: user[0], userVideos, userLikedVideos}) // {object}
  }
}
