type Props = {
  projectIndex: number;
  projectsSize: number;
};
const ProjectCounter = ({ projectIndex, projectsSize }: Props) => {
  return (
    <div className="flex justify-center items-center text-white">
      <p>
        {projectIndex}/{projectsSize}
      </p>
    </div>
  );
};

export { ProjectCounter };
