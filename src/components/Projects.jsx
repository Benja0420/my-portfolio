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
    <Element name="projects" className="bg-base min-h-[100vh] py-20 px-4">
      <h2 className="text-pink-400 font-semibold text-4xl text-center mb-8">
        Proyectos
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg- rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative">
              {!project.isCompleted && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white text-2xl text-center font-semibold transform rotate-45 bg-red-500 px-96 py-1">
                    Sitio en construcción
                  </span>
                </div>
              )}
              {project.isCompleted && (
                <div
                  onClick={() => window.open(project.demoUrl, "_blank")}
                  className="absolute cursor-pointer top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl text-center font-semibold">
                    Ir al sitio
                  </span>
                </div>
              )}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[calc(100vw * 9/16)] object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">
                {project.title}
              </h3>
              <p className="text-pink-50 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lavender text-xs py-3 px-2 md:text-base md:py-2 md:px-4 rounded hover:bg-blue transition duration-200"
                >
                  {project.repoName}
                </a>
                {project.repoUrl2 && (
                  <a
                    href={project.repoUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lavender text-xs py-3 px-2 md:text-base md:py-2 md:px-4 rounded hover:bg-blue transition duration-200"
                  >
                    {project.repoName2}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
