import { Element } from "react-scroll";
import minga from "../assets/img/minga.jpg";

const projects = [
  {
    title: "Minga",
    description: "Una plataforma para ver y compartir tus mangas.",
    imageUrl: minga,
    repoName: "Repositorio frontend",
    repoUrl: "https://github.com/Benja0420/mingaFront",
    repoName2: "Repositorio backend",
    repoUrl2: "https://github.com/Benja0420/mingaBack",
    demoUrl: "https://minwafront.vercel.app/",
    isCompleted: true,
  },
  {
    title: "Proyecto dos",
    description: "Descripción del proyecto dos.",
    imageUrl: "https://placehold.co/1900x914?text=Hola\nMundo",
    repoName: "Repositorio",
    repoUrl: "https://github.com/username/project-two",
    demoUrl: "https://project-two-demo.com",
    isCompleted: false,
  },
  {
    title: "Proyecto tres",
    description: "Descripción del proyecto tres.",
    imageUrl: "https://placehold.co/1900x914?text=Hola\nMundo",
    repoName: "Repositorio",
    repoUrl: "https://github.com/username/project-three",
    demoUrl: "https://project-three-demo.com",
    isCompleted: false,
  },
];

const Projects = () => {
  return (
    <Element name="projects" className="bg-base">
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-400">
                <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                Mis Trabajos
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
              <span className="block text-white">Proyectos</span>
              <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                Destacados
              </span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {!project.isCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <div className="rounded-lg bg-red-500/90 px-4 py-2 text-center">
                        <p className="text-sm font-semibold text-white">
                          En construcción
                        </p>
                      </div>
                    </div>
                  )}
                  {project.isCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        className="rounded-lg bg-pink-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-pink-600"
                      >
                        Ver sitio
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-pink-400">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 px-3 py-2 text-xs font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/50 ${
                        !project.isCompleted
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                    >
                      Frontend
                    </a>
                    {project.repoUrl2 && (
                      <a
                        href={project.repoUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 px-3 py-2 text-xs font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 ${
                          !project.isCompleted
                            ? "pointer-events-none opacity-50"
                            : ""
                        }`}
                      >
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

export default Projects;
