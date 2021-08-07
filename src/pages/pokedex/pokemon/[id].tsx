import { useRouter } from "next/dist/client/router";
import Loading from "../../../components/Loading";
import { useQuery } from "react-query";
import Head from "next/head";
import { getPokemonDataById } from "../../../service/Api";
import Image from "next/image";
import { capitalFirstLetter } from "../../../helpers/formatString";
import StatsBar from "../../../components/StatsBar";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Ability from "../../../components/Ability";
import {
  convertDecimeterToMeter,
  convertHectogramToQuilogram,
} from "../../../helpers/convert";
import Title from "../../../components/Title";
import link from "next/link";

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

  const { weight, height, name, abilities, stats, types } = pokemonData;

  const pokemonType = pokemonData.types[0].type.name;
  const colorType = getColorBackground(pokemonType);
  const officialArtwork =
    pokemonData.sprites.other["official-artwork"].front_default;
  const alternativeArt = pokemonData.sprites.front_default;
  const image = officialArtwork ? officialArtwork : alternativeArt;

  const weightInKilogram = convertHectogramToQuilogram(weight)
    .toString()
    .replace(".", ",");
  const heightInMeter = convertDecimeterToMeter(height)
    .toString()
    .replace(".", ",");
  return (
    <div
      className={`bg-gradient-to-t bg-${pokemonType} flex flex-col h-screen`}
    >
      <Navbar />
      <Head>
        <title>Pokedex | {capitalFirstLetter(name)}</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main className="flex flex-col container space-y-4 items-center mx-auto">
        <div className="flex flex-wrap space-x-2 m-4">
          <span className="text-3xl font-semibold text-white">
            {capitalFirstLetter(name)} -
          </span>
          <span className="text-3xl font-semibold text-white">
            Nº {id.toString().padStart(3, "0")}
          </span>
        </div>
        <div className="flex flex-wrap justify-center space-x-8">
          <Image src={image} width="240" height="240" alt={name} />
          <div className="bg-white rounded-lg p-2 flex flex-col flex-wrap w-80 h-56 items-center justify-center text-center text-lg">
            <Title>Peso</Title>
            <span>{weightInKilogram} kg</span>
            <Title>Altura</Title>
            <span>{heightInMeter} m</span>
            <div>
              <Title>Habilidades</Title>
              <ul className="text-center">
                {abilities.map(({ ability }) => {
                  const urlSplited = ability.url.split("/");
                  const abilityId = urlSplited[6];
                  return (
                    <li className="text-md">
                      <Link href={`/pokedex/abilities/${abilityId}`}>
                        <a>{capitalFirstLetter(ability.name)}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-8 w-full">
          <div className="flex flex-col items-center">
            <Title>Atributos</Title>
            <ul className="flex flex-col p-2 bg-white rounded-lg">
              {stats.map(({ stat, base_stat }, index) => {
                return (
                  <li>
                    <StatsBar key={index} value={base_stat}>
                      {stat.name}
                    </StatsBar>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Title>Tipo</Title>
            <ul className="flex space-x-2">
              {types.map(({ type }) => {
                return (
                  <li className={`text-white rounded-lg p-2 w-20 text-center bg-${type.name} border-2 border-gray-400 shadow-md rounded-lg`}>
                    {capitalFirstLetter(type.name)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex-wrap items-center flex flex-col">
          <Title>Habilidades</Title>
          <ul className="flex flex-wrap">
            {abilities.map(({ ability }) => {
              return (
                <li>
                  <Ability>{ability.url}</Ability>
                </li>
              );
            })}
          </ul>
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
