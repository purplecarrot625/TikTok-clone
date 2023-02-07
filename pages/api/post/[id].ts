// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client'
import { postDetailQuery } from '../../../utils/queries'

{/** call const {data} = await.axios.get(`url/api/post/${id}`), then pull data like this */}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const {id} = req.query // get the query string parameters from the incoming request
    const query = postDetailQuery(id)

    const data = await client.fetch(query)

    res.status(200).json(data[0]) //return the first element in the array
   
  }
}

// const {data} is from distructuring object
// const data is not
// By destructuring the data property directly from the response object, we can access the properties of data without having to reference the response object in each access. This makes the code more readable and reduces the amount of code needed to access the values.