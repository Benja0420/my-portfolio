import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';
import { ACCENT_KEYS, ACCENT_STYLES } from '../../data/accentStyles.js';

export default function SkillBadge({ name, icon, invert = false, accent = 'pink' }) {
  const styles = ACCENT_STYLES[accent];

  return (
    <li
      className={cn(
        'group relative isolate flex h-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 px-2 py-4 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-xl',
        styles.shadow,
      )}
    >
      <img
        src={icon}
        alt=""
        width="40"
        height="40"
        loading="lazy"
        decoding="async"
        className={cn(
          'h-10 w-10 object-contain transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-12 sm:w-12',
          invert && 'invert',
        )}
      />
      <span
        className={cn(
          'text-center text-xs font-medium leading-tight text-gray-300 transition-colors [overflow-wrap:anywhere] sm:text-sm',
          styles.hoverText,
        )}
      >
        {name}
      </span>
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10',
          styles.overlay,
        )}
      />
    </li>
  );
}

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  accent: PropTypes.oneOf(ACCENT_KEYS),
};
