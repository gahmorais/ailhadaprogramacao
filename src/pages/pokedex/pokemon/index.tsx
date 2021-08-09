import Head from "next/head";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import { getPagination, searchPokemon } from "../../../service/Api";
import PaginationButton from "../../../components/PaginationButton";
import { ReactElement, useState } from "react";
import Pokemon from "../../../components/Pokemon";
import { useRouter } from "next/dist/client/router";
import Navbar from "../../../components/Navbar";
import InputSearch from "../../../components/InputSearch";
import PokemonContainer from "../../../components/PokemonContainer";
import PageTitle from "../../../components/PageTitle";

export default function Index() {
  const router = useRouter();
  const { offset } = router.query;
  const render: boolean = router.isReady;
  const [pagination, setPagination] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );
  const [input, setInput] = useState<string>("");
  const { data: allPokemons, isLoading: loadingAllPokemons } = useQuery(
    [pagination],
    async () => getPagination(pagination),
    { enabled: render }
  );

  const { data: pokemons, isLoading: searchingPokemons } = useQuery(
    input,
    async () => searchPokemon(input)
  );

  let mainTsx: ReactElement;

  if (loadingAllPokemons || !allPokemons) {
    return <Loading />;
  }

  function handlePaginationButtonClick(url: string) {
    if (url != null) {
      const urlSplited = url.split("?");
      router.push(`/pokedex/pokemon/?${urlSplited[1]}`);
      setPagination(url);
    }
  }

  function handleInputChange(input: string) {
    setInput(input);
  }

  if (searchingPokemons || !pokemons) {
    mainTsx = <Loading />;
  } else if (input.length > 2) {
    mainTsx = (
      <PokemonContainer>
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <Pokemon>{pokemon.url}</Pokemon>
            </li>
          );
        })}
      </PokemonContainer>
    );
  } else {
    mainTsx = (
      <div>
        <PokemonContainer>
          {allPokemons.results.map((pokemon, index) => {
            return (
              <li key={index}>
                <Pokemon>{pokemon.url}</Pokemon>
              </li>
            );
          })}
        </PokemonContainer>

        <div className="flex justify-center mt-5 space-x-4 pl-3">
          <PaginationButton
            onButtonClick={handlePaginationButtonClick}
            url={allPokemons.previous}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onButtonClick={handlePaginationButtonClick}
            url={allPokemons.next}
          >
            Next
          </PaginationButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>

      <main className="flex flex-col items-center container mx-auto">
        <PageTitle>Pokemons</PageTitle>
        <div className="pl-4 pr-4 h-10 w-4/5 mt-4">
          <InputSearch
            placeHolder="Digite o nome do pokemon"
            onInputChange={handleInputChange}
            value={input}
          />
        </div>
        {mainTsx}
      </main>

      <footer></footer>
    </div>
  );
}
