import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import { SOCIAL_LINKS } from '../../data/socialLinksData.js';
import { BRAND } from '../../data/navigationData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-base">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 sm:text-left">
          © {year} {BRAND.name}. Hecho con React, Vite y Tailwind CSS.
        </p>
        <ul className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.id}>
              <Button
                href={link.href}
                variant="ghost"
                size="icon"
                aria-label={`${link.label} (abre en una pestaña nueva)`}
                icon={<Icon name={link.icon} className="h-5 w-5" />}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
