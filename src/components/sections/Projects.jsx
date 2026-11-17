import SectionContainer from '../layout/SectionContainer.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import { PROJECTS } from '../../data/projectsData.js';

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      eyebrow="Mis trabajos"
      title="Proyectos"
      highlight="Destacados"
      description="Aplicaciones reales desplegadas en producción con código fuente público."
      decoration="bottom-left"
    >
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {PROJECTS.map((project) => (
          <li key={project.id} className="min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}

        {/* Tarjeta CTA para explorar repositorios y nuevos desarrollos en GitHub */}
        <li className="min-w-0">
          <article className="flex h-full flex-col justify-between rounded-2xl border-2 border-dashed border-white/15 bg-gradient-to-br from-gray-900/60 to-gray-950/60 p-6 sm:p-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                Código abierto y laboratorios
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Más proyectos y prácticas en GitHub
              </h3>
              <p className="text-sm leading-6 text-gray-300 sm:text-[1rem] sm:leading-7">
                Actualmente estoy desarrollando nuevos proyectos para el portafolio aplicando
                arquitectura limpia con Java / Spring Boot, aplicaciones nativas en Android con
                Kotlin y servicios full stack con TypeScript y Docker.
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-xs text-gray-400 sm:text-sm">
                <li>APIs RESTful con Java, Spring Boot y MySQL</li>
                <li>Apps móviles Android con Kotlin</li>
                <li>Aplicaciones web con React, Node.js y MongoDB</li>
              </ul>
            </div>

            <div className="pt-6">
              <Button
                href="https://github.com/Benja0420"
                variant="secondary"
                icon={<Icon name="github" className="h-5 w-5" />}
              >
                Explorar repositorios en GitHub
              </Button>
            </div>
          </article>
        </li>
      </ul>
    </SectionContainer>
  );
}
