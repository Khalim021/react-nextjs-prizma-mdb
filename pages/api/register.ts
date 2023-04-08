import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if(req.method !== 'POST') {
  return res.status(405).end()
 }
 
 try {
  const {name, email, password} = req.body;
  const userExist = await prismadb.user.findUnique({
    where: {
      email
    }
  })
  if(userExist) {
    return res.status(422).json({error: 'Email already exist!'})
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prismadb.user.create({
    data: {
      email,
      name,
      hashedPassword,
      image: '',
      emailVerified: new Date()
    }
  });

  return res.status(200).json(user)
  
 } catch (error) {
  console.log('Error')
  return res.status(400).end()
 }
}
