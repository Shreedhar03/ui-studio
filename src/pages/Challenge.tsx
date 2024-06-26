import { useEffect, useState } from "react";
import Projects from "../config/Challenges";
import { useParams } from "react-router-dom";
import Seperator from "../components/Seperator";

const Challenge = () => {
  const [challenge, setChallenge] = useState<
    | {
        title: string;
        component: JSX.Element;
      }
    | undefined
  >();
  const { id } = useParams();
  const projectId = parseInt(id ?? "") ?? 0;

  useEffect(() => {
    setChallenge(Projects()[projectId - 1]);
  }, []);

  return (
    <>
      <div className="sm:container mx-4 sm:mx-auto xl:px-24 py-12">
        <h1 className="text-3xl">{challenge?.title}</h1>
        <Seperator />

        <div className="mt-4">{challenge?.component}</div>
      </div>
    </>
  );
};

export default Challenge;
