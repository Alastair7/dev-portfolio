type Props = {
  currentProject: number;
  projects: number[];
};
const ProjectCounter = ({ currentProject, projects }: Props) => {
  const projectsSize = projects.length;

  return (
    <div className="flex justify-center items-center text-white">
      <p>
        {currentProject}/{projectsSize}
      </p>
    </div>
  );
};

export { ProjectCounter };
