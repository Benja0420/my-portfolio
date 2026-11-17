import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

export default function CredentialCard({ certification }) {
  const { title, institution, program, period, hours, skills, image, credential, note } =
    certification;

  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
      <a
        href={image.full}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver certificado completo de ${title} (abre en una pestaña nueva)`}
        className="relative aspect-[4/3] overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pink-400"
      >
        <img
          src={image.thumb}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            {period}
          </span>
          <span className="rounded-full bg-pink-500/10 px-2.5 py-1 text-xs font-semibold text-pink-400">
            {hours} horas
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-pink-400 sm:text-xl">
            {title}
          </h3>
          <p className="text-sm font-medium text-gray-300">{institution}</p>
          {program && <p className="text-xs text-gray-400">{program}</p>}
        </div>

        <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Tecnologías aprendidas">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10"
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-2 pt-3">
          <div className="flex flex-wrap gap-2">
            {credential && (
              <Button
                href={credential.url}
                size="sm"
                icon={<Icon name="certificate" className="h-4 w-4" />}
              >
                {credential.label}
              </Button>
            )}
            <Button
              href={image.full}
              size="sm"
              variant={credential ? 'secondary' : 'primary'}
              icon={<Icon name="external" className="h-4 w-4" />}
            >
              Ver certificado
            </Button>
          </div>
          {note && <p className="text-xs text-gray-400">{note}</p>}
        </div>
      </div>
    </article>
  );
}

CredentialCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    program: PropTypes.string,
    period: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      full: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    credential: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    note: PropTypes.string,
  }).isRequired,
};
