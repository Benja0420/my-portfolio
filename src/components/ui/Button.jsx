import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';

const BASE =
  'inline-flex select-none items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS = {
  primary: 'bg-pink-500 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-600 active:bg-pink-700',
  secondary:
    'bg-white/5 text-gray-100 ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:text-pink-300 active:bg-white/15',
  ghost: 'text-gray-300 hover:bg-white/5 hover:text-pink-400 active:bg-white/10',
};

const SIZES = {
  sm: 'min-h-11 px-4 py-2 text-sm',
  md: 'min-h-12 px-5 py-3 text-sm sm:text-base',
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
