export default function CategoryHeader() {
  return (
    <>
      <div className="Wrapper">
        <h1>The New York Times Best Seller Explorer</h1>
      </div>
      <style jsx>{`
        .Wrapper {
          width: 100%
          margin-left: auto;
          margin-right: auto;
          padding: 1rem;
          display: flex;
          justify-content: center;
          
        }
        h1 {
          font-size: 2rem;
        }
      `}</style>
    </>
  );
}
