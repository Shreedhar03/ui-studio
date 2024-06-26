import { useNavigate } from "react-router-dom";
import Seperator from "../components/Seperator";
import Projects from "../config/Challenges";

import { motion } from "framer-motion";

const routeVariants = {
  // transition style: fade in slowly
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
};

const ListChallenges = () => {
  const router = useNavigate();
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="sm:container mx-4 sm:mx-auto xl:px-24 py-12 flex flex-col"
    >
      <h1 className="text-3xl heading mb-6">Challenges</h1>

      <Seperator />

      <section className="py-6">
        {Projects().map((project, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer flex items-center gap-3 w-auto"
            onClick={() => {
              router(`/challenge/${index + 1}`);
            }}
          >
            <p className="text-2xl font-semibold">{index + 1}.</p>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            {/* <div className="py-4">{project.component}</div> */}
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default ListChallenges;
