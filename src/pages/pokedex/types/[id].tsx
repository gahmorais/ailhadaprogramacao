import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import Navbar from "../../../components/Navbar";
import Title from "../../../components/Title";
import { capitalFirstLetter } from "../../../helpers/formatString";
import { getTypeById } from "../../../service/Api";

export default function TypesInfo() {
  const router = useRouter();
  const { id } = router.query;
  const render: boolean = router.isReady;
  const { data: type, isLoading } = useQuery(
    `${id}`,
    async () => getTypeById(`${id}`),
    { enabled: render }
  );
  if (!type || isLoading) {
    return <Loading />;
  }

  const { name } = type;

  return (
    <div className={`bg-${name} flex flex-col h-screen overflow-auto`}>
      <Navbar />
      <Head>
        <title>Pokedex | {capitalFirstLetter(name)}</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>
      <main className="flex flex-col container mx-auto items-center">
        <div className="flex flex-wrap space-x-2 m-4 text-center">
          <span className="text-3xl font-semibold text-white">
            {capitalFirstLetter(name)}
          </span>
          <span className="text-3xl font-semibold text-white"> - </span>
          <span className="text-3xl font-semibold text-white">
            Nº {id.toString().padStart(3, "0")}
          </span>
        </div>
        <Title>Relação de dano</Title>
        <div className="flex flex-wrap mx-auto justify-center">
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Dano duplo de:</span>
            {type.damage_relations.double_damage_from.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Dano duplo em: </span>
            {type.damage_relations.double_damage_to.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Metade do dano de: </span>
            {type.damage_relations.half_damage_from.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Metade do dano em: </span>
            {type.damage_relations.half_damage_to.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Nenhum dano de: </span>
            {type.damage_relations.no_damage_from.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
          <div className="flex flex-col w-50 h-30 items-center border-white border-2 m-2 text-white rounded-lg p-4">
            <span>Nenhum dano em: </span>
            {type.damage_relations.no_damage_to.map((damage) => {
              return <span>{capitalFirstLetter(damage.name)}</span>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
