import PolaroidImage from "../../assets/polaroid.svg?react";
import { ProjectPreview } from "./domain";
type Props = {
  project: ProjectPreview;
};

const Project = ({ project }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-2/3 md:max-w-md lg:max-w-lg xl:max-w-xl p-2 bg-raising_black rounded-lg">
      <div className="flex flex-row items-center">
        <PolaroidImage />
      </div>
      <h2 className="text-seashell font-bold">{project.title}</h2>
      <p className="leading-relaxed mt-2 p-1 w-full text-sm md:text-base lg:text-lg xl:text-xl text-seashell text-center">
        {project.description}
      </p>
    </div>
  );
};

export { Project };
