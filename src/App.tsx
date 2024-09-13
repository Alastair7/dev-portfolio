import ArrowNext from "./assets/arrow_next.svg";
import ArrowPrev from "./assets/arrow_prev.svg";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { Project } from "./components/Projects/Project";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center bg-raising_black">
        <Profile />
      </div>

      <div className="flex justify-center items-center w-full h-32 2xl:h-48">
        <About />
      </div>
      <div className="flex justify-center items-center m-1">
        <button className="size-10">
          <span>
            <img src={ArrowPrev}></img>
          </span>
        </button>
        <Project />
        <button className="size-10">
          <span>
            <img src={ArrowNext}></img>
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
