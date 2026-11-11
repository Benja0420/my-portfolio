import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';
import SectionHeader from '../ui/SectionHeader.jsx';
import DecorativeBlob from '../ui/DecorativeBlob.jsx';

export default function SectionContainer({
  id,
  children,
  eyebrow,
  title,
  highlight,
  description,
  labelledBy,
  decoration = 'none',
  decorationGradient = 'from-pink-500 to-purple-600',
  spacing = 'py-16 sm:py-20 lg:py-24',
  className,
  innerClassName,
}) {
  const titleId = title ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? titleId}
      className={cn(
        'relative isolate scroll-mt-16 overflow-hidden bg-base px-4 sm:px-6 lg:px-8',
        spacing,
        className,
      )}
    >
      <div className={cn('mx-auto w-full max-w-7xl', innerClassName)}>
        {title && (
          <SectionHeader
            titleId={titleId}
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            description={description}
          />
        )}
        {children}
      </div>

      {decoration !== 'none' && (
        <DecorativeBlob position={decoration} gradient={decorationGradient} />
      )}
    </section>
  );
}

SectionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  labelledBy: PropTypes.string,
  decoration: PropTypes.oneOf(['none', 'top-right', 'bottom-left', 'bottom-right']),
  decorationGradient: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};
