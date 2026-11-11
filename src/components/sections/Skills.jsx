import SectionContainer from '../layout/SectionContainer.jsx';
import SkillBadge from '../ui/SkillBadge.jsx';
import cn from '../../utils/cn.js';
import { SKILL_CATEGORIES } from '../../data/skillsData.js';
import { ACCENT_STYLES } from '../../data/accentStyles.js';

export default function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Experiencia"
      title="Habilidades"
      highlight="Técnicas"
      decoration="top-right"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={category.id}
            className={cn('min-w-0 space-y-5', index === 0 && 'lg:col-span-2')}
          >
            <h3
              className={cn(
                'flex items-center gap-2 text-lg font-bold',
                ACCENT_STYLES[category.accent].text,
              )}
            >
              {category.title}
              <span className="text-sm font-medium text-gray-500">({category.skills.length})</span>
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
    </SectionContainer>
  );
}
