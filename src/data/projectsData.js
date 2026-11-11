import mingaImage from '../assets/img/minga.jpg';

export const PROJECT_STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
};

const PLACEHOLDER_IMAGE = 'https://placehold.co/1600x900/1e1e2e/f5c2e7?text=Pr%C3%B3ximamente';

/**
 * Project: {
 *   id: string, title: string, description: string,
 *   image: { src: string, alt: string, width: number, height: number },
 *   status: 'completed' | 'in-progress',
 *   demoUrl: string | null,
 *   repositories: Array<{ id: string, label: string, url: string }>
 * }
 */
export const PROJECTS = [
  {
    id: "minga",
    title: "Minga",
    description: "Una plataforma para ver y compartir tus mangas.",
    image: {
      src: mingaImage,
      alt: "Captura de pantalla de la plataforma Minga",
      width: 1900,
      height: 914,
    },
    status: PROJECT_STATUS.COMPLETED,
    demoUrl: "https://minga-2-front.vercel.app/",
    repositories: [
      {
        id: "frontend",
        label: "Frontend",
        url: "https://github.com/Benja0420/mingaFront",
      },
      {
        id: "backend",
        label: "Backend",
        url: "https://github.com/Benja0420/mingaBack",
      },
    ],
  },
  {
    id: "project-two",
    title: "Proyecto dos",
    description: "Descripción del proyecto dos.",
    image: { src: PLACEHOLDER_IMAGE, alt: "", width: 1600, height: 900 },
    status: PROJECT_STATUS.IN_PROGRESS,
    demoUrl: null,
    repositories: [],
  },
  {
    id: "project-three",
    title: "Proyecto tres",
    description: "Descripción del proyecto tres.",
    image: { src: PLACEHOLDER_IMAGE, alt: "", width: 1600, height: 900 },
    status: PROJECT_STATUS.IN_PROGRESS,
    demoUrl: null,
    repositories: [],
  },
];
