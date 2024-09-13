import ArrowNext from "./assets/arrow_next.svg";
import ArrowPrev from "./assets/arrow_prev.svg";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Projects/Project";
import { ProjectCounter } from "./components/Projects/ProjectCounter";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center bg-raising_black">
        <Profile />
      </div>
      <div className="flex justify-center items-center my-4">
        <About />
      </div>
      <div className="flex justify-center items-center m-1">
        <button className="size-10 mr-2">
          <span>
            <img src={ArrowPrev}></img>
          </span>
        </button>
        <Project />
        <button className="size-10 ml-2">
          <span>
            <img src={ArrowNext}></img>
          </span>
        </button>
      </div>
      <ProjectCounter currentProject={0} projects={[]} />{" "}
    </>
  );
}

export default App;
