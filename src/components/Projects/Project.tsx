import PolaroidImage from "../../assets/polaroid.svg";
const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center w-2/3 md:max-w-md lg:max-w-lg xl:max-w-xl p-2 bg-raising_black rounded-lg">
      <div className="flex flex-row items-center">
        <img className="size-20" src={PolaroidImage} alt="project image" />
      </div>
      <h2 className="text-seashell font-bold">Project Title</h2>
      <p className="leading-relaxed mt-2 p-1 w-full text-sm md:text-base lg:text-lg xl:text-xl text-seashell text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae
        reiciendis, officiis eligendi itaque facere a reprehenderit labore
        beatae iusto. Suscipit enim cum provident mollitia eum laborum impedit
        eos. Quidem.
      </p>
    </div>
  );
};

export { Project };
