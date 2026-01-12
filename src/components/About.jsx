import { Element } from 'react-scroll';

const About = () => {
    return (
      <Element name="about" className="bg-base">
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-12 space-y-4">
              <div className="inline-flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-400">
                  <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                  Mi historia
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
                <span className="block text-white">Sobre</span>
                <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                  mí
                </span>
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1 - ¿Quién soy? */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="space-y-4">
                  <div className="inline-flex items-center">
                    <span className="rounded-full bg-pink-500/10 px-3 py-1 text-sm font-semibold text-pink-400">
                      Quién soy
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Mi Pasión por la Tecnología
                  </h3>
                  <p className="leading-8 text-gray-300">
                    Hola, soy Benjamín y vivo en Chillán, una ciudad pequeña de
                    Chile. Desde que era pequeño, me ha apasionado la tecnología. Me
                    encanta desarmar y armar cosas, lo que me ha permitido resolver
                    diversos problemas tecnológicos de amigos, familiares y
                    conocidos, ya sea formateando sus computadores o arreglando
                    programas que no funcionan. Además, disfruto mucho trabajando
                    con celulares Android, flasheando e instalando ROMs customizadas
                    como LineageOS. También me gusta probar distintos sabores de
                    Linux y personalizarlos, además de tener experiencia haciendo
                    Hackintosh en distintos equipos.
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </div>

              {/* Card 2 - ¿Qué estoy haciendo? */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="space-y-4">
                  <div className="inline-flex items-center">
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-semibold text-purple-400">
                      Actualidad
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Expandiendo Conocimientos
                  </h3>
                  <p className="leading-8 text-gray-300">
                    Actualmente, me dedico a ampliar mis conocimientos y habilidades
                    en tecnología. Estoy aprendiendo programación, enfocándome en
                    lenguajes como Python, TypeScript y herramientas como Docker. En mi
                    tiempo libre, disfruto viendo anime, saliendo en bicicleta,
                    juegos de mesa con los amigos y escalando. Mi pasión por la
                    tecnología y el deseo de ayudar a otros siempre me motiva a
                    seguir aprendiendo y mejorando.
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </div>
            </div>
          </div>

          {/* Decorative background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -bottom-40 left-0 -z-10 transform-gpu blur-3xl sm:-bottom-80">
              <div
                className="aspect-[1404,767] w-[87.75rem] bg-gradient-to-r from-pink-500 to-purple-600 opacity-10"
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
};

export default About;