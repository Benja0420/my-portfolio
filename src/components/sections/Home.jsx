import SectionContainer from '../layout/SectionContainer.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';
import AnimationHome from '../ui/AnimationHome.jsx';

export default function Home() {
  return (
    <SectionContainer
      id="home"
      labelledBy="home-title"
      decoration="top-right"
      decorationGradient="from-pink-500 to-pink-200"
      spacing="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-24"
      className="flex min-h-svh items-center"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 space-y-6 sm:space-y-8">
          <Eyebrow>Bienvenido a mi portafolio</Eyebrow>

          <h1 id="home-title" className="text-fluid-hero font-bold">
            <span className="block text-white">Benjamín</span>
            <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
              Sepúlveda
            </span>
          </h1>

          <p className="text-lg font-semibold text-pink-400 sm:text-xl">Fullstack Developer</p>

          <p className="max-w-xl text-fluid-lead text-gray-300">
            Soy Desarrollador Full Stack y estudiante de Ingeniería en Informática. Cuento con
            habilidades técnicas y colaborativas en un entorno ágil. La curiosidad por la tecnología
            me llevó a aprender de manera autodidacta. Me interesa el desarrollo de apps móviles e
            inteligencia artificial.
          </p>

          <SocialLinks stackOnMobile />
        </div>

        <div className="hidden min-w-0 justify-center lg:flex lg:justify-end">
          <AnimationHome />
        </div>
      </div>
    </SectionContainer>
  );
}
