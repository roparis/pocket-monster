"use client";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const params = useParams();
  const { data } = api.pokemon.details.useQuery({
    id: String(params.id ?? ""),
  });

  return (
    <div className="h-[166px] overflow-y-auto bg-lime-200 p-1 shadow-inner">
      <div className="flex h-full">
        <div className="flex-1">
          {data?.sprites.front_default && (
            <Image
              width={82}
              height={82}
              className="aspect-square w-36"
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
              quality={100}
              priority
              unoptimized
            />
          )}
          <p className="text-center text-sm font-bold capitalize">
            {data?.name}
          </p>
        </div>
        <div className="flex h-full flex-1 flex-col justify-between rounded-lg border-4 p-1">
          {data?.stats.map((stat) => (
            <div
              key={stat.stat.name}
              className="flex items-center justify-between"
            >
              <h3 className="text-xs font-bold">{stat.stat.name}</h3>
              <p className="text-xs">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
