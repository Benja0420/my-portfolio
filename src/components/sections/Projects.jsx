import SectionContainer from '../layout/SectionContainer.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import { PROJECTS } from '../../data/projectsData.js';

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      eyebrow="Mis trabajos"
      title="Proyectos"
      highlight="Destacados"
      decoration="bottom-left"
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {PROJECTS.map((project) => (
          <li key={project.id} className="min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
