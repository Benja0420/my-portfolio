import SectionContainer from '../layout/SectionContainer.jsx';
import SkillBadge from '../ui/SkillBadge.jsx';
import cn from '../../utils/cn.js';
import { EXPLORING_SKILLS, SKILL_CATEGORIES } from '../../data/skillsData.js';
import { ACCENT_STYLES } from '../../data/accentStyles.js';

export default function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Stack tecnológico"
      title="Habilidades"
      highlight="Técnicas"
      description="Tecnologías organizadas por área con las que construyo aplicaciones web y móviles."
      decoration="top-right"
    >
      <div className="space-y-10">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={cn('min-w-0 space-y-5', index === 0 && 'md:col-span-2')}
            >
              <h3
                className={cn(
                  'flex items-center gap-2 text-lg font-bold',
                  ACCENT_STYLES[category.accent].text,
                )}
              >
                {category.title}
                <span className="text-sm font-medium text-gray-500">
                  ({category.skills.length})
                </span>
              </h3>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] sm:gap-4">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.id}
                    name={skill.name}
                    icon={skill.icon}
                    invert={skill.invert}
                    accent={category.accent}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra de tecnologías en exploración */}
        <div className="flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-5 ring-1 ring-white/5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-400">
              Explorando en mi radar
            </h3>
            <p className="text-xs text-gray-400 sm:text-sm">
              Frameworks y ecosistemas con los que experimento en proyectos personales:
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {EXPLORING_SKILLS.map((skill) => (
              <li
                key={skill.id}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 ring-1 ring-inset ring-white/10 sm:text-sm"
              >
                <img
                  src={skill.icon}
                  alt=""
                  width="20"
                  height="20"
                  loading="lazy"
                  decoding="async"
                  className={cn('h-5 w-5 object-contain', skill.invert && 'invert')}
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
