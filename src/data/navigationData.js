/**
 * Fuente única de verdad de la navegación.
 * `id` DEBE coincidir con el prop `id` del <SectionContainer> de cada sección.
 * El orden de este array define el orden del menú.
 */
export const NAV_LINKS = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'skills', label: 'Habilidades', href: '#skills' },
  { id: 'about', label: 'Sobre mí', href: '#about' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

/** Array estable (nivel de módulo) para hooks que observan secciones. */
export const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export const BRAND = {
  name: 'Benjamín Sepúlveda',
  shortName: 'BS',
  href: '#home',
};
