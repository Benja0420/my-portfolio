import SectionContainer from '../layout/SectionContainer.jsx';
import cn from '../../utils/cn.js';
import { ABOUT_CARDS } from '../../data/aboutData.js';
import { ACCENT_STYLES } from '../../data/accentStyles.js';

export default function About() {
  return (
    <SectionContainer
      id="about"
      eyebrow="Mi historia"
      title="Sobre"
      highlight="mí"
      decoration="bottom-left"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {ABOUT_CARDS.map((card) => {
          const accent = ACCENT_STYLES[card.accent];
          return (
            <article
              key={card.id}
              className={cn(
                'group relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 p-6 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-2xl sm:p-8',
                accent.shadow,
              )}
            >
              <div className="space-y-4">
                <span className={cn('inline-flex rounded-full px-3 py-1 text-sm font-semibold', accent.pill)}>
                  {card.eyebrow}
                </span>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
                <p className="text-base leading-7 text-gray-300 sm:leading-8">{card.body}</p>
              </div>
              <div
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10',
                  accent.overlay,
                )}
              />
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
