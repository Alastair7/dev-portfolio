import { ReactComponent as ArrowNext } from "./assets/arrow_next.svg";
import { ReactComponent as ArrowPrev } from "./assets/arrow_prev.svg";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Projects/Project";
import { ProjectCounter } from "./components/Projects/ProjectCounter";
import { Button } from "./shared/Button";

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
        <Button className="size-10 mr-2" icon={ArrowPrev} />
        <Project />
        <Button className="size-10 ml-2" icon={ArrowNext} />
      </div>
      <ProjectCounter currentProject={0} projects={[]} />
    </>
  );
}

export default App;
