import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { PROJECT_STATUS } from '../../data/projectsData.js';

export default function ProjectCard({ project }) {
  const { title, role, summary, description, stack, highlights, image, status, demoUrl, repositories } =
    project;
  const isCompleted = status === PROJECT_STATUS.COMPLETED;

  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
      <div className="relative aspect-video overflow-hidden bg-gray-800">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        {!isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="rounded-lg bg-red-500/90 px-4 py-2 text-sm font-semibold text-white">
              En construcción
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-pink-400">
              {title}
            </h3>
            {role && (
              <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400">
                {role}
              </span>
            )}
          </div>
          {summary && <p className="text-sm font-medium text-gray-200 sm:text-[1rem]">{summary}</p>}
          <p className="text-sm leading-6 text-gray-300">{description}</p>
        </div>

        {stack && stack.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías del proyecto">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="list-disc space-y-1.5 pl-5 text-xs leading-5 text-gray-300 sm:text-sm">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {isCompleted && demoUrl && (
            <Button href={demoUrl} size="sm" icon={<Icon name="external" className="h-4 w-4" />}>
              Ver demo
            </Button>
          )}
          {isCompleted &&
            repositories.map((repo) => (
              <Button
                key={repo.id}
                href={repo.url}
                size="sm"
                variant="secondary"
                icon={<Icon name="github" className="h-4 w-4" />}
              >
                {repo.label}
              </Button>
            ))}
          {!isCompleted && (
            <span className="inline-flex min-h-11 items-center text-sm font-medium text-gray-400">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    status: PropTypes.oneOf(Object.values(PROJECT_STATUS)).isRequired,
    demoUrl: PropTypes.string,
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
