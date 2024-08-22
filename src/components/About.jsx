import { Element } from 'react-scroll';

const About = () => {
    return (
      <Element name="about" className="bg-base min-h-[100vh] py-20 px-4">
        <h2 className="text-pink-400 font-semibold text-4xl text-center">
          Sobre mí
        </h2>
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-pink-400 text-2xl font-semibold mb-4">
                ¿Quién soy?
              </h3>
              <p className="text-pink-50 mb-4">
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
            <div className="p-6">
              <h3 className="text-pink-400 text-2xl font-semibold mb-4">
                ¿Qué estoy haciendo?
              </h3>
              <p className="text-pink-50 mb-4 ">
                Actualmente, me dedico a ampliar mis conocimientos y habilidades
                en tecnología. Estoy aprendiendo programación, enfocándome en
                lenguajes como TypeScript y herramientas como Docker. En mi
                tiempo libre, disfruto viendo anime, saliendo en bicicleta,
                juegos de mesa con los amigos y escalando. Mi pasión por la
                tecnología y el deseo de ayudar a otros siempre me motiva a
                seguir aprendiendo y mejorando.
              </p>
            </div>
          </div>
        </div>
      </Element>
    );
};

export default About;