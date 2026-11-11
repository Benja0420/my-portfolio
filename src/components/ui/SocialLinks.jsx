import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import cn from '../../utils/cn.js';
import { SOCIAL_LINKS } from '../../data/socialLinksData.js';

export default function SocialLinks({ variant = 'primary', stackOnMobile = false, className }) {
  return (
    <ul
      className={cn(
        'flex gap-3',
        stackOnMobile ? 'flex-col min-[420px]:flex-row min-[420px]:flex-wrap' : 'flex-wrap',
        className,
      )}
    >
      {SOCIAL_LINKS.map((link) => (
        <li key={link.id} className={cn(stackOnMobile && 'w-full min-[420px]:w-auto')}>
          <Button
            href={link.href}
            variant={variant}
            className={cn(stackOnMobile && 'w-full min-[420px]:w-auto')}
            icon={<Icon name={link.icon} className="h-5 w-5 shrink-0" />}
          >
            {link.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}

SocialLinks.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  stackOnMobile: PropTypes.bool,
  className: PropTypes.string,
};
