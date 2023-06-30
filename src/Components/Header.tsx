import { Link } from "react-router-dom";

function NavigationHeader() {
  return (
    <div className="grid grid-flow-col p-10 pt-5 pb-5 bg-primary h-50 text-white">
      <div className="grid-cols-8">
        <Link to="\home">Logo</Link>
      </div>
      <div className="grid-cols-2 flex flex-row justify-around">
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <Link to="/review">Review</Link>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  return (
    <>
      <NavigationHeader />
    </>
  );
}
