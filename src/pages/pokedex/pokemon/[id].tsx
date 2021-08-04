import { useRouter } from "next/dist/client/router";
import Loading from "../../../components/Loading";
import { useQuery } from "react-query";
import Head from "next/head";
import { getPokemonDataById } from "../../../service/Api";
import Image from "next/image";
import { capitalFirstLetter } from "../../../helpers/formatString";
import StatsBar from "../../../components/StatsBar";
import Link from "next/link";

export default function PokemonInfo() {
  const router = useRouter();
  const { id } = router.query;
  const render: boolean = router.isReady;
  const { data: pokemonData, isLoading } = useQuery(
    `${id}`,
    async () => getPokemonDataById(`${id}`),
    { enabled: render }
  );

  if (isLoading || !pokemonData) {
    return <Loading />;
  }

  const pokemonType = pokemonData.types[0].type.name;
  const colorType = getColorBackground(pokemonType);

  return (
    <div
      className={`bg-gradient-to-t from-${colorType}-100 to-${colorType}-600 h-screen`}
    >
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main className={`flex flex-col`}>
        <div className="flex flex-col justify-center items-start pl-3">
          <h2 className="w-full text-5xl font-semibold">
            {capitalFirstLetter(pokemonData.name)}
          </h2>
          <Image
            src={pokemonData.sprites.other["official-artwork"].front_default}
            width="240"
            height="240"
            alt={pokemonData.name}
          />
        </div>

        <div className="flex border-2 border-gray-500 rounded-md p-4 flex-col w-60 ml-2">
          <p className="font-semibold text-xl mb-1">Estatisticas</p>
          {pokemonData.stats.map((stats, index) => {
            return (
              <div key={index}>
                <StatsBar
                  value={stats.base_stat}
                  initialColor="red"
                  finalColor="red"
                >
                  {stats.stat.name}
                </StatsBar>
              </div>
            );
          })}
        </div>
        <div>
          <p>Habilidades</p>
          {pokemonData.abilities.map((ability) => {
            const abilityId = ability.ability.url.split("/")[6];

            return (
              <p key={ability.slot}>
                <Link href={`/pokedex/abilities/${abilityId}`}>
                  <a>{ability.ability.name}</a>
                </Link>
              </p>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function getColorBackground(pokemonType: string): string {
  let color = "";
  switch (pokemonType) {
    case "normal":
      break;
    case "fighting":
      break;
    case "flying":
      break;
    case "poison":
      color = "purple";
      break;
    case "ground":
      break;
    case "rock":
      color = "brown";
      break;
    case "bug":
      break;
    case "ghost":
      break;
    case "steel":
      break;
    case "fire":
      color = "yellow";
      break;
    case "water":
      color = "blue";
      break;
    case "grass":
      color = "green";
      break;
    case "electric":
      break;
    case "psychic":
      break;
    case "ice":
      break;
    case "dragon":
      break;
    case "dark":
      break;
    case "fairy":
      break;
    case "unknown":
      break;
    case "shadow":
      break;
  }
  return color;
}
