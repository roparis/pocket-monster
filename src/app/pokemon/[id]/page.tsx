"use client";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const pokemon = api.pokemon.details.useQuery({ id: String(params.id) })?.data;
  return (
    <div className="flex h-[166px] flex-wrap overflow-y-auto bg-lime-200 p-1 shadow-inner">
      <div className="flex-1">
        <img
          className="aspect-square w-32"
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
        />
        <p className="text-sm">{pokemon?.name}</p>
      </div>
      <div className="h-full flex-1 rounded-lg border p-1">
        {pokemon?.abilities.map((ability) => (
          <div key={ability.ability.name}>{ability.ability.name}</div>
        ))}
      </div>
    </div>
  );
}
