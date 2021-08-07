import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
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
  return <div>{name}</div>;
}
