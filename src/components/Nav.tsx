import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="py-4 text-lg font-semibold bg-gradient-to-r from-primary/20 to-primary/40 to-90%">
        <div className="mx-4 sm:container xl:px-24 sm:mx-auto flex items-center justify-between">
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
