import { api, HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default async function Home() {
  const data = await api.pokemon.home({ offset: 0, limit: 151 });

  void (await api.pokemon.home({ offset: 0, limit: 151 }));
  return (
    <HydrateClient>
      <div className="flex h-[166px] flex-wrap overflow-y-auto bg-lime-200 p-1 shadow-inner">
        {data?.results.map((pokemon) => {
          return (
            <Link
              href={`/pokemon/${pokemon.name}`}
              key={pokemon.name}
              className={"w-1/3"}
            >
              <div className="flex flex-col items-center justify-center py-1">
                <img
                  className="h-8 w-8"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`}
                  alt={pokemon.name}
                />
                <p className="text-sm">{pokemon.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </HydrateClient>
  );
}
