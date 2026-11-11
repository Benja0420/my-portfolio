import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon.jsx';
import cn from '../../utils/cn.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import useScrollLock from '../../hooks/useScrollLock.js';
import { BRAND, NAV_LINKS, SECTION_IDS } from '../../data/navigationData.js';

const DESKTOP_QUERY = '(min-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const activeId = useActiveSection(SECTION_IDS);

  useScrollLock(isOpen);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Cierre con Escape (solo con el menú abierto)
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Cierre automático al cruzar a desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNavigate = (event, id) => {
    event.preventDefault();
    setIsOpen(false);

    const target = document.getElementById(id);
    if (!target) return;

    const behavior = window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'auto' : 'smooth';

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior, block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Capa de fondo con blur (NO en <header>, ver nota sobre containing block) */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10 border-b border-white/10 backdrop-blur-md transition-colors duration-200',
            isOpen ? 'bg-base/95' : 'bg-base/80',
          )}
        />

        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        >
          {/* Marca */}
          <a
            href={BRAND.href}
            onClick={(event) => handleNavigate(event, 'home')}
            className={cn('inline-flex min-h-11 items-center rounded-lg px-1 text-lg font-bold tracking-tight text-white', FOCUS_RING)}
          >
            <span className="text-pink-400">&lt;</span>
            {BRAND.shortName}
            <span className="text-pink-400">&nbsp;/&gt;</span>
            <span className="sr-only">{` — ${BRAND.name}, ir al inicio`}</span>
          </a>

          {/* Links desktop */}
          <ul className="hidden items-center gap-1 md:flex lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavigate(event, link.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold transition-colors duration-200 lg:px-4',
                      FOCUS_RING,
                      isActive
                        ? 'bg-pink-500/10 text-pink-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-pink-400',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Toggle móvil */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-200 transition-colors hover:bg-white/10 hover:text-pink-400 md:hidden',
              FOCUS_RING,
            )}
          >
            <Icon name={isOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </nav>

        {/* Panel desplegable móvil */}
        <div
          id="mobile-menu"
          className={cn(
            'absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain border-b border-white/10 bg-base/95 shadow-2xl shadow-black/40 backdrop-blur-md transition-[opacity,transform,visibility] duration-200 ease-out md:hidden',
            isOpen
              ? 'visible translate-y-0 opacity-100'
              : 'pointer-events-none invisible -translate-y-2 opacity-0',
          )}
        >
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavigate(event, link.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'flex min-h-12 w-full items-center rounded-xl px-4 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pink-400',
                      isActive
                        ? 'bg-pink-500/10 text-pink-400'
                        : 'text-gray-200 hover:bg-white/5 hover:text-pink-400',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      {/* Backdrop (hermano del header, nunca hijo) */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={cn(
          'fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 md:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
    </>
  );
}
