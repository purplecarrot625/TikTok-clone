import axios from 'axios';
import jwt_decode from 'jwt-decode';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const createOrGetUser =async (response: any, addUser: any) => {
  // credential里面包含了用户信息，我们将他解码
  // 这里的decode是什么数据类型？
  const decoded: {name: string, picture: string, sub: string } = jwt_decode(response.credential)
  const { name, picture, sub } = decoded
// 构建 user object
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture
  }
  // 在哪里调用user呢？

  addUser(user)

  await axios.post(`${BASE_URL}/api/auth`, user) //接下来创建该路径
}; //jwt