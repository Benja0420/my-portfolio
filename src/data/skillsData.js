import angularIcon from '../assets/icons/angular.svg';
import cssIcon from '../assets/icons/css.svg';
import dockerIcon from '../assets/icons/docker.svg';
import expressIcon from '../assets/icons/express.svg';
import gitIcon from '../assets/icons/git.svg';
import htmlIcon from '../assets/icons/html.svg';
import javaIcon from '../assets/icons/java.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import kotlinIcon from '../assets/icons/kotlin.svg';
import linuxIcon from '../assets/icons/linux.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nestIcon from '../assets/icons/nest.svg';
import nextIcon from '../assets/icons/next.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import reactIcon from '../assets/icons/react.svg';
import springIcon from '../assets/icons/spring.svg';
import swiftIcon from '../assets/icons/swift.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import typescriptIcon from '../assets/icons/typescript.svg';

/**
 * Agrupación de habilidades por área técnica para lectura rápida por reclutadores.
 * Skill: { id: string, name: string, icon: string(url), invert?: boolean }
 */
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    accent: 'pink',
    skills: [
      { id: 'html', name: 'HTML', icon: htmlIcon },
      { id: 'css', name: 'CSS', icon: cssIcon },
      { id: 'javascript', name: 'JavaScript', icon: javascriptIcon },
      { id: 'typescript', name: 'TypeScript', icon: typescriptIcon },
      { id: 'react', name: 'React', icon: reactIcon },
      { id: 'tailwind', name: 'Tailwind CSS', icon: tailwindIcon },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    accent: 'purple',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: nodejsIcon },
      { id: 'express', name: 'Express', icon: expressIcon, invert: true },
      { id: 'java', name: 'Java', icon: javaIcon },
      { id: 'spring', name: 'Spring', icon: springIcon },
    ],
  },
  {
    id: 'mobile',
    title: 'Desarrollo Móvil',
    accent: 'green',
    skills: [
      { id: 'kotlin', name: 'Kotlin (Android)', icon: kotlinIcon },
      { id: 'react-native', name: 'React Native', icon: reactIcon },

    ],
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    accent: 'blue',
    skills: [
      { id: 'mysql', name: 'MySQL', icon: mysqlIcon },
      { id: 'mongodb', name: 'MongoDB', icon: mongodbIcon },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas y Entorno',
    accent: 'amber',
    skills: [
      { id: 'git', name: 'Git', icon: gitIcon },
      { id: 'docker', name: 'Docker', icon: dockerIcon },
      { id: 'linux', name: 'Linux', icon: linuxIcon },
    ],
  },
];

/** Tecnologías en radar / exploración activa. */
export const EXPLORING_SKILLS = [
  { id: "nextjs", name: "Next.js", icon: nextIcon, invert: true },
  { id: "nestjs", name: "NestJS", icon: nestIcon },
  { id: "angular", name: "Angular", icon: angularIcon },
  { id: "swift", name: "Swift", icon: swiftIcon },
];
