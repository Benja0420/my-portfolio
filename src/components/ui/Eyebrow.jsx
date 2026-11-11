import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';
import { ACCENT_KEYS, ACCENT_STYLES } from '../../data/accentStyles.js';

export default function Eyebrow({ children, accent = 'pink' }) {
  const styles = ACCENT_STYLES[accent];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold',
        styles.pill,
      )}
    >
      <span aria-hidden="true" className={cn('h-2 w-2 rounded-full', styles.dot)} />
      {children}
    </span>
  );
}

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  accent: PropTypes.oneOf(ACCENT_KEYS),
};
