import { Element } from "react-scroll";

const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    imageUrl: "https://via.placeholder.com/300",
    repoUrl: "https://github.com/username/project-one",
    demoUrl: "https://project-one-demo.com",
    isCompleted: false,
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    imageUrl: "https://via.placeholder.com/300",
    repoUrl: "https://github.com/username/project-two",
    demoUrl: "https://project-two-demo.com",
    isCompleted: false,
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    imageUrl: "https://via.placeholder.com/300",
    repoUrl: "https://github.com/username/project-three",
    demoUrl: "https://project-three-demo.com",
    isCompleted: false,
  },
];

const Projects = () => {
  return (
    <Element name="projects" className="bg-base min-h-[100vh] py-20 px-4">
      <h2 className="text-pink-400 font-semibold text-4xl text-center mb-8">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg- rounded-lg shadow-lg overflow-hidden"
          >
            {!project.isCompleted && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-2xl font-semibold transform rotate-45 bg-red-500 px-36 py-1">
                  Site Under Construction
                </span>
              </div>
            )}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
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
                  className="bg-lavender text-white py-2 px-4 rounded hover:bg-blue transition duration-200"
                >
                  Repo
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-teal text-white py-2 px-4 rounded hover:bg-green transition duration-200 ${
                    !project.isCompleted ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
