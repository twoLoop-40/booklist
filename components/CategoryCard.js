import { useRouter } from "next/router";

export default function CategoryCard({ categoryName, categoryRoute }) {
  const router = useRouter();
  const onGotoBooksClick = (id) => {
    router.push(`/list/${id}`);
  };
  return (
    <>
      <li onClick={() => onGotoBooksClick(categoryRoute)}>
        <div className="CategoryBox">{`${categoryName}`} &rarr;</div>
      </li>
      <style jsx>{`
        li {
          cursor: pointer;
          display: inline-block;
          margin-right: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .CategoryBox {
          padding: 10px 20px;
          border-radius: 4px;
          background-color: white;
          border: 2px solid gray;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
          font-size: 1.25rem;
          font-weight: bold;
          transition: transform 0.1s ease;
        }
        .CategoryBox:hover {
          transform: translateY(3px);
        }
      `}</style>
    </>
  );
}
