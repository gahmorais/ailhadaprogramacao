import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { read } from "service/ApiFutebol";

export default function ChampionshipYear() {
  const router = useRouter();
  const { year } = router.query;

  const { data, isLoading } = useQuery(`${year}`, async () => {
    await read(`${year}`);
  });

  // if (isLoading || !data) {
  //   return <div>Carregando...</div>;
  // }

  return <div>Dados prontos</div>;
}
