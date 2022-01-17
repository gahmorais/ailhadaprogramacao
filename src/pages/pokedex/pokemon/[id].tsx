import { useRouter } from "next/dist/client/router";
import Loading from "components/Loading";
import { useQuery } from "react-query";
import Head from "next/head";
import { getPokemonDataById } from "service/ApiPokedex";
import Image from "next/image";
import { capitalFirstLetter } from "helpers/formatString";
import StatsBar from "components/pokedex/StatsBar";
import Link from "next/link";
import Navbar from "components/Navbar";
import {
  convertDecimeterToMeter,
  convertHectogramToQuilogram,
} from "helpers/convert";
import Title from "components/Title";
import Type from "components/pokedex/Type";
import Move from "components/pokedex/Move";

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

  const { weight, height, name, abilities, stats, types, sprites, moves } =
    pokemonData;

  const pokemonType = pokemonData.types[0].type.name;
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
    <div className={`bg-${pokemonType} flex flex-col h-screen overflow-auto`}>
      <Navbar />
      <Head>
        <title>Pokedex | {capitalFirstLetter(name)}</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main className="flex flex-col container space-y-4 items-center mx-auto flex-grow pb-10">
        <section className="flex flex-wrap space-x-2 m-4">
          <span className="text-3xl font-semibold text-white">
            {capitalFirstLetter(name)} -
          </span>
          <span className="text-3xl font-semibold text-white">
            Nº {id.toString().padStart(3, "0")}
          </span>
        </section>
        <section className="flex flex-wrap justify-center space-x-8">
          <Image src={image} width="240" height="240" alt={name} />
          <div className="bg-white rounded-lg p-2 flex flex-col flex-wrap w-80 h-56 items-center justify-center text-center text-lg">
            <Title>Peso</Title>
            <span>{weightInKilogram} kg</span>
            <Title>Altura</Title>
            <span>{heightInMeter} m</span>
            <div>
              <Title>Habilidades</Title>
              <ul className="text-center">
                {abilities.map(({ ability }, index) => {
                  const urlSplited = ability.url.split("/");
                  const abilityId = urlSplited[6];
                  return (
                    <li
                      key={index}
                      className="text-md scale-100 transform hover:scale-125 font-semibold"
                    >
                      <Link href={`/pokedex/abilities/${abilityId}`}>
                        <a>{capitalFirstLetter(ability.name)}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap justify-center lg:space-x-8 w-full">
          <div className="flex flex-col items-center">
            <Title>Atributos</Title>
            <ul className="flex flex-col p-2 bg-white rounded-lg">
              {stats.map(({ stat, base_stat }, index) => {
                return (
                  <li key={index}>
                    <StatsBar value={base_stat}>{stat.name}</StatsBar>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Title>Tipo</Title>
            <ul className="flex">
              {types.map(({ type }, index) => {
                return (
                  <li key={index}>
                    <Type>{type.url}</Type>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="text-center flex flex-col items-center justify-center mx-auto">
          <Title>Sprites</Title>
          <div className="flex flex-wrap w-7/12 ml-2 mr-2 items-center justify-center border-2 border-white rounded-lg p-4">
            {/* prettier-ignore */}
            {sprites.front_default && (
              <Image src={sprites.front_default} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.back_default && (
              <Image src={sprites.back_default} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.front_female && (
              <Image src={sprites.front_female} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.back_female && (
              <Image src={sprites.back_female} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.front_shiny && (
              <Image src={sprites.front_shiny} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.back_shiny && (
              <Image src={sprites.back_shiny} height="100" width="100" />
            )}
            {/* prettier-ignore */}
            {sprites.front_shiny_female && (
              <Image
                src={sprites.front_shiny_female}
                height="100"
                width="100"
              />
            )}
            {/* prettier-ignore */}
            {sprites.back_shiny_female && (
              <Image src={sprites.back_shiny_female} height="100" width="100" />
            )}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <Title>Golpes</Title>
          <ul className="flex flex-wrap w-full justify-center">
            {moves.map(({ move, version_group_details }, index) => {
              return (
                <li
                  key={index}
                  className="w-52 p-2 m-1 border-gray-500 border-2 rounded-lg"
                >
                  <Move url={move.url}>{capitalFirstLetter(move.name)}</Move>
                  {version_group_details
                    .filter(
                      ({ version_group }) => version_group.name === "red-blue"
                    )
                    .map((details) => {
                      return (
                        <div className="flex flex-col">
                          <span>Jogo: {details.version_group.name}</span>
                          <span>
                            Aprendido no nível: {details.level_learned_at}
                          </span>
                          <span>
                            Aprendizagem: {details.move_learn_method.name}
                          </span>
                        </div>
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
