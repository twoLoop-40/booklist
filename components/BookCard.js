import { useRouter } from "next/router";

export default function BookCard({ bookInfo }) {
  const router = useRouter();
  const onBuyClick = (buyUrl) => {
    router.push(buyUrl);
  };
  return (
    <>
      <li className="curvedCorner">
        <img src={bookInfo.book_image} alt={bookInfo.title}></img>
        <h2>{bookInfo.title}</h2>
        <h3>{bookInfo.author}</h3>
        <div
          onClick={() => onBuyClick(bookInfo.amazon_product_url)}
          className="BuyBtn"
        >
          Buy Now &rarr;
        </div>
      </li>
      <style jsx>{`
        .curvedCorner {
          position: relative;
          display: flex;
          flex-direction: column;
          border: thin solid gray;
          border-radius: 12px;
          background-color: white;
          text-align: center;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        img {
          margin-left: auto;
          margin-right: auto;
          height: auto;
          width: 100%;
          flex-shrink: 0;
          object-fit: cover;
        }
        h2 {
          margin-top: 1.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #1a202c;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4a9ee7;
        }
        .BuyBtn {
          width: 6rem;
          margin-bottom: 1rem;
          margin-left: 1rem;
          font-size: 1.5rem;
          cursor: pointer;
          border: 2px solid #86cbfa;
        }
      `}</style>
    </>
  );
}
