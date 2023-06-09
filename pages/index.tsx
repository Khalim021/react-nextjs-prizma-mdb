import AnimeList from "@/components/AnimeList";
import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import useAnimeList from "@/hooks/useAnimeList";
import useLikes from "@/hooks/useLikes";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const {data: animes = []} = useAnimeList();
  const {data: likes = []} = useLikes();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <AnimeList title="Trending Animes" data={animes} />
        <AnimeList title="My Watch List" data={likes} />
      </div>
    </>
  )
}
