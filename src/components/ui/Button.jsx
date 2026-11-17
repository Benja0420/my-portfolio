import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';

const BASE =
  'inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25 hover:from-pink-600 hover:to-pink-500 hover:shadow-xl hover:shadow-pink-500/40 motion-safe:hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-pink-500/15 text-white ring-1 ring-inset ring-pink-400/50 shadow-md shadow-pink-500/10 hover:bg-pink-500 hover:text-white hover:ring-pink-400 hover:shadow-lg hover:shadow-pink-500/30 motion-safe:hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-gray-200 hover:bg-pink-500/15 hover:text-pink-300 active:bg-pink-500/25',
};

// Nota: no usar `text-base` porque @catppuccin/tailwindcss define el color `base` (#1e1e2e)
// y genera `.text-base { color: rgb(30, 30, 46) }`, oscureciendo el texto del botón.
const SIZES = {
  sm: 'min-h-11 px-4 py-2 text-sm',
  md: 'min-h-12 px-5 py-3 text-sm sm:text-[0.9375rem]',
  icon: 'h-11 w-11 p-0',
};

const EXTERNAL_URL = /^https?:\/\//;

export default function Button({
  children,
  href,
  icon,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  external,
  type = 'button',
  className,
  ...rest
}) {
  const isExternal = external ?? Boolean(href && EXTERNAL_URL.test(href));
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className);

  const content = (
    <>
      {icon}
      {children ? <span>{children}</span> : null}
      {isExternal ? <span className="sr-only"> (abre en una pestaña nueva)</span> : null}
    </>
  );

  if (href) {
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'icon']),
  fullWidth: PropTypes.bool,
  external: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};
