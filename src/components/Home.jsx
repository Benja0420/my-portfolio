import { Element } from "react-scroll"
import ResumeButton from "./buttons/ResumeButton.jsx"
import LinkedinButton from "./buttons/LinkedinButton.jsx";
import GithubButton from "./buttons/GithubButton.jsx";
import YoutubeButton from "./buttons/YoutubeButton.jsx";

function Home() {
  return (
    <Element name="home" className="bg-base h-[100vh] px-4">
      <h1 className="text-pink-400 font-semibold text-6xl pt-16">
        Benjamín <span className="text-pink-200 font-normal">Sepúlveda</span>
      </h1>
      <h2 className="text-pink-100 pt-4 text-3xl">Fullstack Developer</h2>
      <p className="text-pink-50 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, adipisci dignissimos eum nobis itaque necessitatibus dolorem asperiores! Iste eligendi consequuntur natus numquam aut cupiditate asperiores maxime, laborum similique molestias, necessitatibus repellendus quod ipsa sunt excepturi, odio officia! Amet voluptate qui sunt ab recusandae, aperiam libero eum dicta reprehenderit debitis facere necessitatibus aspernatur placeat deleniti non magnam ipsam repudiandae accusamus porro!
      </p>
      <div className="flex flex-wrap gap-2">
        <ResumeButton />
        <LinkedinButton />
        <GithubButton />
        <YoutubeButton />
      </div>
    </Element>
  );
}

export default Home;