import Seo from "../components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explore.
      </p>
      <p>We hope you enjoy your stay</p>
      <style jsx>{`
        h1 {
          font-size: 3rem;
        }
        p {
          font-weight: bold;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}
