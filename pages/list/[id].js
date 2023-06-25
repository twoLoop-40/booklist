import Books from "../../components/Books";
import useBooksData from "../../hooks";

export default function BookCategories({ category }) {
  const { bookInfos, isLoading } = useBooksData(category);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Books
          booksTitle={bookInfos?.display_name}
          bookList={bookInfos?.books}
        />
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  return {
    props: {
      category: id
    }
  };
}
