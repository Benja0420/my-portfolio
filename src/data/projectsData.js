import mingaImage from '../assets/img/minga.jpg';

export const PROJECT_STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
};

/**
 * Project: {
 *   id: string,
 *   title: string,
 *   role: string,
 *   summary: string,
 *   description: string,
 *   stack: string[],
 *   highlights: string[],
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
    role: "Full Stack Developer",
    summary:
      "Plataforma web full stack para explorar, leer y publicar mangas en línea.",
    description:
      "Aplicación SPA con arquitectura cliente-servidor desacoplada, desarrollada en equipo aplicando metodologías ágiles (Scrum) durante el bootcamp intensivo de Mindhub.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Frontend reactivo con catálogo filtrable, vistas de detalle y navegación fluida.",
      "API RESTful en Node.js + Express con persistencia en MongoDB y autenticación.",
      "Repositorios desacoplados (Frontend y Backend) y despliegue continuo en Vercel.",
    ],
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
];
