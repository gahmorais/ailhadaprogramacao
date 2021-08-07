import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import Navbar from "../../../components/Navbar";
import Pokemon from "../../../components/Pokemon";
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

  const effect = abilities.effect_entries.find(
    (effect) => effect.language.name === "en"
  );
  console.log(effect);

  return (
    <>
      <Navbar />
      <div>{abilities.name}</div>
      <div>{effect?.effect}</div>
      <div className="flex flex-wrap">
        {abilities.pokemon.map(({ pokemon }, index) => (
          <Pokemon key={index}>{pokemon.url}</Pokemon>
        ))}
      </div>
    </>
  );
}
