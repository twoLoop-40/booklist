import Categories from "../components/Categories";
import Seo from "../components/Seo";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { apiForList, fetcher } from "../utils";

export default function Home() {
  const { data } = useQuery([apiForList()], () => fetcher(apiForList()));

  return (
    <div>
      <Seo title="Home" />
      <Categories categoryList={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([apiForList()], () => fetcher(apiForList()));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
