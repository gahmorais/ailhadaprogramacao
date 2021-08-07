export interface IPokemonPage {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface IAbilityPage {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface ITypePage {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];

}

interface IEffect {
  effect: string;
  language: {
    name: string;
    url: string;
  };
}

interface IFlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

interface INames {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

interface IPokemonHasAbility {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface IAbilities {
  effect_changes: IEffect[];
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorTextEntries[];
  id: number;
  name: string;
  names: INames[];
  pokemon: IPokemonHasAbility[];
}

interface IPokemonMove {
  name: string;
  url: string;
}

interface IPokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonData {
  abilities: IPokemonAbilities[];
  moves: IPokemonMove[];
  name: string;
  id: number;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: IPokemonType[];
  stats: IPokemonStats[];
  height: number;
  weight: number;
}

interface IDamage {
  name: string;
  url: string;
}

export interface IType {
  damage_relations: {
    double_damage_from: IDamage[];
    double_damage_to: IDamage[];
    half_damage_from: IDamage[];
    half_damage_to: IDamage[];
    no_damage_from: IDamage[];
    no_damage_to: IDamage[];
  };
  id: number;
  moves: IPokemonMove[];
  name: string;
  names: INames[];
  pokemon: {
    pokemon: IPokemon[];
    slot: number;
  }[];
}
