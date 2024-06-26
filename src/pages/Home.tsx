import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const routeVariants = {
  // transition style: pop up
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.35,
      damping: 8,
      stiffness: 100,
    },
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="mt-24 mx-4 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-6xl text-center font-extralight">
          Frontend isn't just about{" "}
          <span className="font-medium underline underline-offset-4">
            centering divs!
          </span>
        </h1>
        <p className="text-3xl mt-6 text-center font-light">
          Improve your skills with{" "}
          <a href="https://react.dev" target="_blank" className="underline">
            React
          </a>{" "}
          and UI challenges
        </p>
        <Link
          to={"/challenges"}
          className="text-lg md:text-2xl bg-gradient-to-r from-primary to-secondary to-90% text-white mt-16 rounded-md px-4 py-2"
        >
          Explore Challenges
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
