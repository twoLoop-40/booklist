import Categories from "../components/Categories";
import Seo from "../components/Seo";
import { apiForList, asyncPipe, fetcher } from "../utils";

export default function Home({ categoryList }) {
  return (
    <div>
      <Seo title="Home" />
      <Categories categoryList={categoryList} />
    </div>
  );
}

export async function getServerSideProps() {
  const listFetcher = asyncPipe(apiForList, fetcher);
  const results = await listFetcher();

  return {
    props: {
      categoryList: results
    }
  };
}
