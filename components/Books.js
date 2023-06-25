import BookCard from "./BookCard";
import Seo from "./Seo";

export default function Books({ booksTitle, bookList }) {
  return (
    <>
      <Seo title={booksTitle ? booksTitle : "Loading..."} />
      <div className="Wrapper">
        <h1>{booksTitle}</h1>
        <ul>
          {bookList?.map((bookInfo) => {
            return (
              <BookCard key={bookInfo.primary_isbn10} bookInfo={bookInfo} />
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .Wrapper {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          align-items: center;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          ul {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 768px) {
          ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          ul {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
