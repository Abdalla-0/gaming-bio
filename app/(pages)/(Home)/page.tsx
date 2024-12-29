import { searchGames } from "@/app/api/api";
import Hero from "./Hero";
import Image from "next/image";
import SwiperCard from "@/app/components/ui/SwiperCard/SwiperCard";
import Link from "next/link";

const Home = async () => {
  const { data } = await searchGames("", 1, [], 10);
  const games = data.results;

  return (
    <main>
      <Hero />
      <div className="mt-8">
        <SwiperCard
          className="h-full"
          items={games.map((game: Game) => ({
            card: (
              <Link href={`/game/${game.id}`} className="cursor-pointer group">
                <div
                  className={`relative w-full h-96 rounded-2xl overflow-hidden after:absolute after:inset-0 after:w-0 after:h-full after:bg-rose-500/60 after:duration-200 group-hover:after:w-full `}
                >
                  <Image
                    className={`object-cover group-hover:scale-125 hover:rotate-6 duration-200`}
                    src={game.background_image}
                    fill
                    alt={game.name}
                  />
                </div>
                <h2 className="text-base font-semibold line-clamp-1 mt-2">
                  {game.name}
                </h2>
              </Link>
            ),
          }))}
          slidesPerView={4}
        />
      </div>
    </main>
  );
};

export default Home;
