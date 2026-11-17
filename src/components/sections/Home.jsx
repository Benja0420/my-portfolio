import SectionContainer from "../layout/SectionContainer.jsx";
import Button from "../ui/Button.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import SocialLinks from "../ui/SocialLinks.jsx";
import AnimationHome from "../ui/AnimationHome.jsx";

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
          <Eyebrow accent="green">
            Disponible para trabajar · Práctica / Full-time
          </Eyebrow>

          <div className="space-y-3">
            <h1 id="home-title" className="text-fluid-hero font-bold">
              <span className="block text-white">Benjamín</span>
              <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                Sepúlveda
              </span>
            </h1>

            <p className="text-lg font-semibold text-pink-400 sm:text-xl">
              Full Stack &amp; Mobile Developer
            </p>

            <p className="inline-flex items-center gap-2 text-sm text-gray-400">
              <Icon
                name="location"
                className="h-4 w-4 shrink-0 text-pink-400"
              />
              <span>Chillán, Chile · Remoto / Híbrido</span>
            </p>
          </div>

          <p className="max-w-xl text-fluid-lead text-gray-300">
            Desarrollador Full Stack y estudiante de Ingeniería en Informática
            con formación certificada en stacks MERN, Java / Spring Boot y
            desarrollo móvil Android con Kotlin. Enfocado en crear aplicaciones
            mantenibles en entornos ágiles.
          </p>

          <div className="space-y-3">
            <SocialLinks variant="secondary" stackOnMobile />
            <Button
              href="#contact"
              variant="secondary"
              className="w-full min-[420px]:w-auto"
            >
              Contactar
            </Button>
          </div>
        </div>

        <div className="hidden min-w-0 justify-center lg:flex lg:justify-end">
          <AnimationHome />
        </div>
      </div>
    </SectionContainer>
  );
}
