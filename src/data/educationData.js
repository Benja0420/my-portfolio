import mernThumb from '../assets/certificates/mern-thumb.jpg';
import mernFull from '../assets/certificates/mern.jpg';
import javaThumb from '../assets/certificates/java-thumb.jpg';
import javaFull from '../assets/certificates/java.jpg';
import androidThumb from '../assets/certificates/android-thumb.jpg';
import androidFull from '../assets/certificates/android.jpg';
import ciscoThumb from '../assets/certificates/cisco-thumb.jpg';
import ciscoFull from '../assets/certificates/cisco.jpg';

/** Estudios formales superiores. */
export const EDUCATION = [
  {
    id: 'university',
    title: 'Ingeniería en Informática',
    institution: 'Instituto Profesional Santo Tomás · Sede Chillán',
    period: '2025 – Presente',
    status: 'Estudiante activo',
  },
];

/**
 * Certification: {
 *   id, title, institution, program?, period, hours, skills: string[],
 *   image: { thumb, full, width, height, alt },
 *   credential: { label, url } | null,
 *   note?: string
 * }
 * Orden: del más reciente al más antiguo.
 */
export const CERTIFICATIONS = [
  {
    id: 'android',
    title: 'Desarrollo de Aplicaciones Móviles Android Trainee v2.0',
    institution: 'Cooperativa de Trabajo Posiciona · SENCE',
    program: 'Programa Reinvéntate Talento Digital (97 % asistencia)',
    period: 'Dic 2025 – Mar 2026',
    hours: 465,
    skills: ['Kotlin', 'Android SDK', 'UI Móvil', 'Git'],
    image: {
      thumb: androidThumb,
      full: androidFull,
      width: 1200,
      height: 1553,
      alt: 'Certificado SENCE de Desarrollo de Aplicaciones Móviles Android con datos personales protegidos',
    },
    credential: null,
    note: 'Certificado oficial SENCE · código de verificación disponible a solicitud',
  },
  {
    id: 'cisco-it-essentials',
    title: 'IT Essentials: PC Hardware and Software',
    institution: 'Cisco Networking Academy · IP Santo Tomás (Sede Chillán)',
    program: 'Cisco Networking Academy Program',
    period: 'Jul 2025',
    hours: 70,
    skills: ['Hardware', 'Redes', 'Linux / Windows', 'Seguridad TI', 'Troubleshooting'],
    image: {
      thumb: ciscoThumb,
      full: ciscoFull,
      width: 1200,
      height: 813,
      alt: 'Certificado Cisco Networking Academy de IT Essentials otorgado en IP Santo Tomás Sede Chillán',
    },
    credential: null,
    note: 'Certificado emitido por Cisco Networking Academy e IP Santo Tomás',
  },
  {
    id: 'java',
    title: 'Desarrollo de Aplicaciones Full Stack Java Trainee v2.0',
    institution: 'Inglés Siempre Capacitaciones · SENCE',
    program: 'Programa Reconversión Laboral (100 % asistencia)',
    period: 'Feb 2024 – Jul 2024',
    hours: 480,
    skills: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
    image: {
      thumb: javaThumb,
      full: javaFull,
      width: 1200,
      height: 1553,
      alt: 'Certificado SENCE de Desarrollo Full Stack Java con datos personales protegidos',
    },
    credential: null,
    note: 'Certificado oficial SENCE · código de verificación disponible a solicitud',
  },
  {
    id: 'mern',
    title: 'Bootcamp Desarrollador Web Full Stack MERN & Mobile Apps',
    institution: 'Mindhub',
    program: 'Certificado de Egresado',
    period: 'Oct 2023',
    hours: 600,
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'React Native'],
    image: {
      thumb: mernThumb,
      full: mernFull,
      width: 1200,
      height: 929,
      alt: 'Certificado de egreso Mindhub del Bootcamp Full Stack MERN & Mobile Apps',
    },
    credential: {
      label: 'Verificar en Credly',
      url: 'https://www.credly.com/go/xK8ygr4G',
    },
  },
];

export const TOTAL_TRAINING_HOURS = CERTIFICATIONS.reduce((sum, cert) => sum + cert.hours, 0);
