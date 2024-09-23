import { api, HydrateClient } from "~/trpc/server";
import React from "react";
import Image from "next/image";

export default async function PokemonDetails({ id }: { id: string }) {
  const pokemon = await api.pokemon.details({ id });
  return (
    <HydrateClient>
      <div className="flex flex-col items-center justify-center py-1">
        <Image
          width={32}
          height={32}
          className="h-8 w-8"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <p className="text-sm">{pokemon.name}</p>
      </div>
    </HydrateClient>
  );
}
