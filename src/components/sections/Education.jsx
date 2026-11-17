import SectionContainer from '../layout/SectionContainer.jsx';
import CredentialCard from '../ui/CredentialCard.jsx';
import { CERTIFICATIONS, EDUCATION, TOTAL_TRAINING_HOURS } from '../../data/educationData.js';

const STATS = [
  {
    id: 'programs',
    value: `${CERTIFICATIONS.length} certificaciones`,
    label: 'Bootcamps y cursos aprobados',
  },
  {
    id: 'hours',
    value: `${TOTAL_TRAINING_HOURS.toLocaleString('es-CL')} h`,
    label: 'Horas de capacitación certificada',
  },
  {
    id: 'period',
    value: '2023 – 2026',
    label: 'MERN, Java, Android y Cisco TI',
  },
];

export default function Education() {
  return (
    <SectionContainer
      id="education"
      eyebrow="Aprendizaje continuo"
      title="Formación y"
      highlight="certificaciones"
      description="Educación superior en Ingeniería en Informática complementada con más de 1.600 horas de especialización práctica en desarrollo web, móvil e infraestructura TI."
      decoration="bottom-right"
    >
      <div className="space-y-10">
        {/* Métricas de formación */}
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 ring-1 ring-white/5"
            >
              <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {stat.label}
              </dt>
              <dd className="mt-1 text-2xl font-bold text-white sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Educación Superior */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-pink-400">Educación Superior</h3>
          <div className="grid gap-4">
            {EDUCATION.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-5 ring-1 ring-white/5 sm:flex-row sm:items-center sm:p-6"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white sm:text-xl">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.institution}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item.status}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones técnicas (grilla 2x2 simétrica en tablet/desktop) */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-purple-400">Certificaciones Técnicas</h3>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.id} className="min-w-0">
                <CredentialCard certification={cert} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
