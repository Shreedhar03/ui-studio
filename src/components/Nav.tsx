import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary/20 to-primary/40 to-90%">
        <h1 className="logo text-2xl">UI.Studio.</h1>
        <div className="flex gap-4">
          <Link to="/" className="underline underline-offset-4 font-light">
            Home
          </Link>
          <Link
            to="/challenges"
            className="underline underline-offset-4 font-light"
          >
            Challenges
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
