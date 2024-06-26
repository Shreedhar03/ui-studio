import { useNavigate } from "react-router-dom";
import Seperator from "../components/Seperator";
import Projects from "../config/Challenges";

const ListChallenges = () => {
  const router = useNavigate();
  return (
    <div className="sm:container mx-4 sm:mx-auto xl:px-24 py-12 flex flex-col">
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
    </div>
  );
};

export default ListChallenges;
