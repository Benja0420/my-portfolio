import { Element } from "react-scroll";
import ResumeButton from "./buttons/ResumeButton.jsx";
import LinkedinButton from "./buttons/LinkedinButton.jsx";
import GithubButton from "./buttons/GithubButton.jsx";
import YoutubeButton from "./buttons/YoutubeButton.jsx";
import AnimationHome from "./AnimationHome.jsx";

function Home() {
  return (
    <Element name="home" className="bg-base h-[100vh] px-4 flex flex-col">
      <div className="pt-20 z-20">
        <h1 className="text-pink-400 font-semibold text-6xl text-center pt-4">
          Benjamín <span className="text-pink-200 font-normal">Sepúlveda</span>
        </h1>
        <h2 className="text-pink-100 pt-4 text-3xl text-center">
          Fullstack Developer
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="lg:w-1/2 md:p-12">
          <h3 className="text-2xl font-semibold text-pink-400 pt-5 md:pt-24">Un poco de mi</h3>
          <p className="text-pink-50 text-left">
            Soy Desarrollador Full Stack. Cuento con habilidades técnicas y
            colaborativas en un entorno ágil. También reparo artefactos
            tecnológicos por hobby. La curiosidad por la tecnología me llevó a
            aprender de manera autodidacta sobre el mundo IT.
          </p>
          <div className="flex flex-wrap gap-2">
            <ResumeButton />
            <LinkedinButton />
            <GithubButton />
            <YoutubeButton />
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:right-0 lg:top-20">
          <AnimationHome />
        </div>
      </div>
    </Element>
  );
}

export default Home;
