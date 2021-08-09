import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import Navbar from "../../../components/Navbar";
import Pokemon from "../../../components/Pokemon";
import Title from "../../../components/Title";
import { capitalFirstLetter } from "../../../helpers/formatString";
import { getAbilitiesById } from "../../../service/Api";

export default function AbilitiesInfo() {
  const router = useRouter();
  const { id } = router.query;
  const render: boolean = router.isReady;

  const { data: abilities, isLoading } = useQuery(
    `${id}`,
    async () => getAbilitiesById(`${id}`),
    { enabled: render }
  );
  if (isLoading || !abilities) {
    return <Loading />;
  }

  const { name, pokemon, effect_entries } = abilities;

  const effect = effect_entries.find((effect) => effect.language.name === "en");

  return (
    <>
      <Head>
        <title>Pokedex | {capitalFirstLetter(name)}</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full text-center">
          <span className="text-3xl font-semibold text-gray-500">
            {capitalFirstLetter(name)} -
          </span>
          <span className="text-3xl font-semibold text-gray-500">
            Nº {id.toString().padStart(3, "0")}
          </span>
        </div>
        <div className={`border-2 text-lg rounded-lg w-5/6 p-4 mt-2 mb-2 hover:bg-gray-400 hover:text-white`}>
          <span>{effect?.effect}</span>
        </div>
        <div className="flex flex-col mx-auto justify-center text-center">
          <Title>Pokemons que podem adquirir esta habilidade</Title>
          <ul className="flex flex-wrap mt-2 items-center justify-center">
            {pokemon.map(({ pokemon }, index) => (
              <li key={index}>
                <Pokemon>{pokemon.url}</Pokemon>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
