import CategoryCard from "./CategoryCard";
import CategoryHeader from "./CategoryHead";

export default function Categories({ categoryList }) {
  return (
    <>
      <div className="Wrapper">
        <CategoryHeader />
        <ul>
          {categoryList.map((list) => {
            return (
              <CategoryCard
                key={list.list_name_encoded}
                categoryName={list.display_name}
                categoryRoute={list.list_name_encoded}
              />
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .Wrapper {
          width: 800px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        ul {
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 600px) {
          ul {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}
