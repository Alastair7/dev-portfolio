import { useState } from "react";
import ArrowNext from "./assets/arrow_next.svg?react";
import ArrowPrev from "./assets/arrow_prev.svg?react";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { ProjectPreview } from "./components/Projects/domain";
import { Project } from "./components/Projects/Project";
import { ProjectCounter } from "./components/Projects/ProjectCounter";
import { Button } from "./shared/Button";

function App() {
  const projects: ProjectPreview[] = [
    {
      id: 1,
      title: "Shopper",
      description:
        "Final DAM project.\n It was developed during my last year as a student.\n It was developed with Android studio and Kotlin. Also with Firebase Auth and Firebase Database.",
    },
    { id: 2, title: "Xenopedia", description: "First project ever." },
    { id: 3, title: "Test", description: "TestDescription" },
  ];
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const onNextClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const onPreviousClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className=" flex justify-center items-center bg-raising_black">
        <Profile />
      </div>
      <div className="flex justify-center items-center my-4">
        <About />
      </div>
      <div className="flex justify-center items-center m-1">
        <Button
          className="size-10 mr-2"
          onClick={onPreviousClick}
          icon={ArrowPrev}
        />
        <Project project={projects[currentProjectIndex]} />
        <Button
          className="size-10 ml-2"
          onClick={onNextClick}
          icon={ArrowNext}
        />
      </div>
      <ProjectCounter
        projectIndex={currentProjectIndex + 1}
        projectsSize={projects.length}
      />
    </>
  );
}

export default App;
