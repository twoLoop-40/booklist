import { useRouter } from "next/router";
import { getTitleName } from "../constants";

export default function NavBar() {
  const { left, right } = getTitleName();
  const router = useRouter();
  const onGotoClick = (routeName) => {
    router.push(routeName === "Home" ? "/" : `/${routeName.toLowerCase()}`);
  };
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="BtnWrapper" onClick={() => onGotoClick(left)}>
            <div className="BtnStyle">{left}</div>
          </div>
          <div className="BtnWrapper" onClick={() => onGotoClick(right)}>
            <div className="BtnStyle">{right}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Container {
          border-bottom: 1px solid #cbd5e0;
          background-color: white;
          padding: 20px 16px;
        }
        .Wrapper {
          margin-left: -1rem;
          margin-top: -0.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }
        .BtnWrapper {
          margin-left: 1rem;
          margin-top: 0.5rem;
          flex-shrink: 0;
          cursor: pointer;
        }
        .BtnStyle {
          position: relative;
          display: inline-flex;
          align-items: center;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: underline;
          text-underline-offset: 5px;
          text-decoration-color: black;
          text-decoration-thickness: 3px;
          transition: text-decoration-color 0.2s ease;
        }

        .BtnStyle:hover {
          text-decoration-color: gray;
        }
        .BtnStyle:focus-visible {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .BtnStyle:focus-visible:active {
          outline-color: #4f46e5;
        }
        @media (min-width: 640px) {
          .Wrapper {
            flex-wrap: nowrap;
          }
          .Container {
            padding: 5px 6px;
          }
        }
      `}</style>
    </>
  );
}
