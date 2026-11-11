import { useLayoutEffect } from 'react';

/**
 * Bloquea el scroll del documento mientras `locked` sea true.
 * Usa useLayoutEffect para que el desbloqueo ocurra síncronamente en el commit
 * (antes del requestAnimationFrame que hace scrollIntoView en Navbar).
 */
export default function useScrollLock(locked) {
  useLayoutEffect(() => {
    if (!locked) return undefined;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousPaddingRight = root.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    root.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPaddingRight;
    };
  }, [locked]);
}
