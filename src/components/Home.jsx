import { Element } from "react-scroll";
import ResumeButton from "./buttons/ResumeButton.jsx";
import LinkedinButton from "./buttons/LinkedinButton.jsx";
import GithubButton from "./buttons/GithubButton.jsx";
import YoutubeButton from "./buttons/YoutubeButton.jsx";
import AnimationHome from "./AnimationHome.jsx";

function Home() {
  return (
    <Element name="home" className="bg-base min-h-[100vh] px-4 flex flex-wrap">
      <div className="md:w-1/2 md:p-12">
        <h1 className="text-pink-400 font-semibold text-6xl pt-20">
          Benjamín <span className="text-pink-200 font-normal">Sepúlveda</span>
        </h1>
        <h2 className="text-pink-100 pt-4 text-3xl">Fullstack Developer</h2>
        <p className="text-pink-50 pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo
          deserunt esse veniam! Aut ea consectetur, iusto saepe iure maiores
          vero tempore provident excepturi.
        </p>
        <div className="flex flex-wrap gap-2">
          <ResumeButton />
          <LinkedinButton />
          <GithubButton />
          <YoutubeButton />
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center ">
        <AnimationHome />
      </div>
    </Element>
  );
}

export default Home;
