import { useEffect, useState } from "react";
import Projects from "../config/Challenges";
import { useParams } from "react-router-dom";
import Seperator from "../components/Seperator";

const Challenge = () => {
  const [challenge, setChallenge] = useState<
    | {
        title: string;
        description: JSX.Element;
        component: JSX.Element;
        fileName: string;
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
      <div className="sm:container mx-4 sm:mx-auto xl:px-24 py-12 flex flex-col gap-4">
        <h1 className="text-3xl">{challenge?.title}</h1>

        <Seperator />

        <section className="grid grid-cols-1 md:grid-cols-4 mt-6">
          <div className="col-span-3">{challenge?.description}</div>
          <div className="mt-6 md:mt-0">{challenge?.component}</div>
        </section>

        <a
          href={`https://github.com/Shreedhar03/ui-studio/blob/main/src/projects/${challenge?.fileName}.tsx`}
          target="_blank"
          className="text-primary underline text-lg transition-all"
        >
          Show Code
        </a>
      </div>
    </>
  );
};

export default Challenge;
