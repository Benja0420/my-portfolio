import { Element } from "react-scroll";
import ResumeButton from "./buttons/ResumeButton.jsx";
import LinkedinButton from "./buttons/LinkedinButton.jsx";
import GithubButton from "./buttons/GithubButton.jsx";
import AnimationHome from "./AnimationHome.jsx";

function Home() {
  return (
    <Element name="home" className="bg-base">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-400">
                  <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                  Welcome to my portfolio
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Benjamín</span>
                  <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                    Sepúlveda
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl font-semibold text-pink-400">
                Fullstack Developer
              </p>

              {/* Description */}
              <p className="text-lg leading-8 text-gray-300 max-w-lg">
                Soy Desarrollador Full Stack y estudiante de Ingeniería en
                Informática. Cuento con habilidades técnicas y colaborativas en
                un entorno ágil. La curiosidad por la tecnología me llevó a
                aprender de manera autodidacta. Me interesa el desarrollo de
                apps móviles e inteligencia artificial.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <ResumeButton />
                <LinkedinButton />
                <GithubButton />
              </div>
            </div>

            {/* Right Content - Animation */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md">
                <AnimationHome />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:-top-80">
            <div
              className="aspect-[1404,767] w-[87.75rem] bg-gradient-to-r from-pink-500 to-pink-200 opacity-10"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.5%, 92.5% 84.7%, 75.7% 64%, 55.3% 47.6%, 46.5% 49.7%, 45% 62.4%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Home;
