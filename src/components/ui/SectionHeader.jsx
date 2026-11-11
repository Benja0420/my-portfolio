import PropTypes from 'prop-types';
import Eyebrow from './Eyebrow.jsx';

export default function SectionHeader({ titleId, eyebrow, title, highlight, description }) {
  return (
    <div className="mb-10 max-w-3xl space-y-4 sm:mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={titleId} className="text-fluid-title font-bold">
        <span className="block text-white">{title}</span>
        {highlight && (
          <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && <p className="text-fluid-lead text-gray-400">{description}</p>}
    </div>
  );
}

SectionHeader.propTypes = {
  titleId: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  description: PropTypes.string,
};
