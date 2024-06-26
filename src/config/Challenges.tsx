import Grid from "../projects/Grid";
import GridDesc from "../descriptions/Grid";

export default function Projects(): {
  title: string;
  description: JSX.Element;
  component: JSX.Element;
  fileName: string;
}[] {
  return [
    {
      title: "Interactive Grid",
      description: <GridDesc />,
      component: <Grid />,
      fileName: "Grid",
    },
  ];
}
