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
import macosIcon from '../assets/icons/macos.svg';
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
import windowsIcon from '../assets/icons/windows.svg';

/**
 * Skill: { id: string, name: string, icon: string(url), invert?: boolean }
 * `invert: true` -> el SVG es negro/#212121 y necesita la clase `invert` para verse en fondo oscuro.
 * Category: { id, title, accent: 'pink'|'purple'|'blue', skills: Skill[] }
 */
export const SKILL_CATEGORIES = [
  {
    id: 'learned',
    title: 'Aprendidas',
    accent: 'pink',
    skills: [
      { id: 'html', name: 'HTML', icon: htmlIcon },
      { id: 'css', name: 'CSS', icon: cssIcon },
      { id: 'javascript', name: 'JavaScript', icon: javascriptIcon },
      { id: 'react', name: 'React', icon: reactIcon },
      { id: 'react-native', name: 'React Native', icon: reactIcon },
      { id: 'nodejs', name: 'Node.js', icon: nodejsIcon },
      { id: 'express', name: 'Express', icon: expressIcon, invert: true },
      { id: 'java', name: 'Java', icon: javaIcon },
      { id: 'spring', name: 'Spring', icon: springIcon },
      { id: 'kotlin', name: 'Kotlin', icon: kotlinIcon },
      { id: 'mysql', name: 'MySQL', icon: mysqlIcon },
      { id: 'mongodb', name: 'MongoDB', icon: mongodbIcon },
      { id: 'tailwind', name: 'Tailwind CSS', icon: tailwindIcon },
      { id: 'git', name: 'Git', icon: gitIcon },
      { id: 'linux', name: 'Linux', icon: linuxIcon },
      { id: 'macos', name: 'MacOS', icon: macosIcon },
      { id: 'windows', name: 'Windows', icon: windowsIcon },
    ],
  },
  {
    id: 'learning',
    title: 'Aprendiendo',
    accent: 'purple',
    skills: [
      { id: 'docker', name: 'Docker', icon: dockerIcon },
      { id: 'typescript', name: 'TypeScript', icon: typescriptIcon },
      { id: 'swift', name: 'Swift', icon: swiftIcon },
    ],
  },
  {
    id: 'interested',
    title: 'Interesado en',
    accent: 'blue',
    skills: [
      { id: 'angular', name: 'Angular', icon: angularIcon },
      { id: 'nestjs', name: 'NestJS', icon: nestIcon },
      { id: 'nextjs', name: 'Next.js', icon: nextIcon, invert: true },
    ],
  },
];
