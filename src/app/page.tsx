import { api, HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await api.pokemon.pokedex();

  void (await api.pokemon.pokedex());
  return (
    <HydrateClient>
      <div className="flex h-[166px] flex-wrap overflow-y-auto bg-lime-200 p-1 shadow-inner">
        {data?.pokemon_entries?.map((pokemon) => {
          return (
            <Link
              href={`/pokemon/${pokemon.pokemon_species.name}`}
              key={pokemon.pokemon_species.name}
              className={"w-1/3"}
            >
              <div className="flex flex-col items-center justify-center py-1">
                <Image
                  width={36}
                  height={36}
                  className="h-14 w-14"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.entry_number}.png`}
                  alt={pokemon.pokemon_species.name}
                  quality={100}
                  priority
                />
                <p className="text-sm">{pokemon.pokemon_species.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </HydrateClient>
  );
}
