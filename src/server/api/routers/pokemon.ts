// https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface IPokemonListing {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface IPokemonDetails {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: [];
  }[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}

export const pokemonRouter = createTRPCRouter({
  home: publicProcedure
    .input(
      z.object({ offset: z.number().optional(), limit: z.number().optional() }),
    )
    .query(async ({ input }) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${input.offset}&limit=${input.limit}`,
      );
      return (await data.json()) as IPokemonListing;
    }),
  details: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.id}`);
      return (await data.json()) as IPokemonDetails;
    }),
});
