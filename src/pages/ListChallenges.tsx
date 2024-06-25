import { useNavigate } from "react-router-dom";
import Seperator from "../components/Seperator";
import Projects from "../config/Challenges";

const ListChallenges = () => {
  const router = useNavigate();
  return (
    <div className="container mx-4 sm:mx-auto xl:px-24 py-12 flex flex-col">
      <h1 className="text-3xl heading">Challenges</h1>

      <Seperator />

      <section className="py-3">
        {Projects().map((project, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer"
            onClick={() => {
              router(`/challenge/${index + 1}`);
            }}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            {/* <div className="py-4">{project.component}</div> */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListChallenges;
