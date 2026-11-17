/**
 * Mapa ESTÁTICO de clases por acento. Tailwind JIT necesita los strings completos.
 * Prohibido construir clases dinámicamente (`text-${accent}-400`).
 */
export const ACCENT_STYLES = {
  pink: {
    text: 'text-pink-400',
    pill: 'bg-pink-500/10 text-pink-400',
    dot: 'bg-pink-400',
    shadow: 'hover:shadow-pink-500/20',
    overlay: 'from-pink-600 to-pink-400',
    hoverText: 'group-hover:text-pink-400',
  },
  purple: {
    text: 'text-purple-400',
    pill: 'bg-purple-500/10 text-purple-400',
    dot: 'bg-purple-400',
    shadow: 'hover:shadow-purple-500/20',
    overlay: 'from-purple-600 to-purple-400',
    hoverText: 'group-hover:text-purple-400',
  },
  blue: {
    text: 'text-blue-400',
    pill: 'bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400',
    shadow: 'hover:shadow-blue-500/20',
    overlay: 'from-blue-600 to-blue-400',
    hoverText: 'group-hover:text-blue-400',
  },
  green: {
    text: 'text-emerald-400',
    pill: 'bg-emerald-500/10 text-emerald-400',
    dot: 'bg-emerald-400',
    shadow: 'hover:shadow-emerald-500/20',
    overlay: 'from-emerald-600 to-emerald-400',
    hoverText: 'group-hover:text-emerald-400',
  },
  amber: {
    text: 'text-amber-400',
    pill: 'bg-amber-500/10 text-amber-400',
    dot: 'bg-amber-400',
    shadow: 'hover:shadow-amber-500/20',
    overlay: 'from-amber-600 to-amber-400',
    hoverText: 'group-hover:text-amber-400',
  },
};

export const ACCENT_KEYS = Object.keys(ACCENT_STYLES);
