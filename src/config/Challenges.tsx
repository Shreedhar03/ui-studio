import Grid from "../projects/Grid";

export default function Projects(): {
  title: string;
  component: JSX.Element;
}[] {
  return [
    {
      title: "Interactive Grid",
      component: <Grid />,
    },
  ];
}
