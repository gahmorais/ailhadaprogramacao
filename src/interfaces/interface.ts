export interface IPage {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface IGenericInterface {
  name: string;
  url: string;
}

interface IEffect {
  effect: string;
  language: IGenericInterface;
}

interface IFlavorTextEntries {
  flavor_text: string;
  language: IGenericInterface;
  version_group: IGenericInterface;
}

interface INames {
  language: IGenericInterface;
  name: string;
}

interface IPokemonHasAbility {
  is_hidden: boolean;
  pokemon: IPokemon;
  slot: number;
}

interface IPokemonAbilities {
  ability: IGenericInterface;
  is_hidden: boolean;
  slot: number;
}

export interface IPokemon extends IGenericInterface {}

export interface IAbilities {
  effect_changes: IEffect[];
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorTextEntries[];
  id: number;
  name: string;
  names: INames[];
  pokemon: IPokemonHasAbility[];
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IGenericInterface;
  version_group: IGenericInterface;
}

interface IPokemonMove {
  move: IGenericInterface;
  version_group_details: IVersionGroupDetails[];
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: IGenericInterface;
}

export interface IPokemonType {
  slot: number;
  type: IGenericInterface;
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

interface IDamage extends IGenericInterface {}

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
