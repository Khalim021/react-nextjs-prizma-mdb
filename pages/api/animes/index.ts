import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    await serverAuth(req)
    const animes = await prismadb.anime.findMany();

    return res.status(200).json(animes)

  } catch (error) {
    console.log(error)
    return res.status(400).end();
  }
}


