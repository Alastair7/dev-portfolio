import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <>
      <div className=" flex flex-row justify-center items-center bg-raising_black">
        <Profile />
      </div>

      <div className="flex flex-row justify-center items-center w-full h-28 2xl:h-48 bg-raising_black_100">
        <About />
      </div>
    </>
  );
}

export default App;
