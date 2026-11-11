import PropTypes from 'prop-types';
import cn from '../../utils/cn.js';

const POSITIONS = {
  'top-right': '-top-40 right-0 sm:-top-80',
  'bottom-left': '-bottom-40 left-0 sm:-bottom-80',
  'bottom-right': '-bottom-40 right-0 sm:-bottom-80',
};

const CLIP_PATH =
  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.5%, 92.5% 84.7%, 75.7% 64%, 55.3% 47.6%, 46.5% 49.7%, 45% 62.4%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)';

export default function DecorativeBlob({ position = 'top-right', gradient = 'from-pink-500 to-purple-600' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={cn('absolute transform-gpu blur-3xl', POSITIONS[position])}>
        <div
          className={cn('aspect-[1404/767] w-[48rem] bg-gradient-to-r opacity-10 sm:w-[87.75rem]', gradient)}
          style={{ clipPath: CLIP_PATH }}
        />
      </div>
    </div>
  );
}

DecorativeBlob.propTypes = {
  position: PropTypes.oneOf(['top-right', 'bottom-left', 'bottom-right']),
  gradient: PropTypes.string,
};
