# PLAN_FASE2.md — Certificaciones, Proyectos, Perfil y Contacto funcional

> **Fecha:** 2026-11-11 · **Base:** arquitectura de [PLAN_REFACTOR.md](./PLAN_REFACTOR.md) (ya implementada, lint y build en verde)
> **Alcance acordado:** A (certificaciones) + B (formación, proyectos y perfil) + C (formulario de contacto real).
> **Estado:** plan listo. Las secciones marcadas con 🟡 esperan datos del propietario (ver §6).

---

## 0. Auditoría de los certificados (`src/assets/pdf/`)

Rendericé los 3 PDF con la API de PDF de Windows (en `scratch/`, sin tocar el proyecto) y leí su contenido:

| Archivo | Programa / curso | Institución | Fechas | Horas | Verificación pública | Datos sensibles |
|---|---|---|---|---|---|---|
| `MERN.pdf` | Bootcamp Desarrollador Web Full Stack MERN & Mobile Apps | **Mindhub** | 26-10-2023 | **600** | ✅ Credly: `https://www.credly.com/go/xK8ygr4G` | Ninguno |
| `JAVA.pdf` | Desarrollo de Aplicaciones Full Stack Java Trainee v2.0 (programa *Reconversión Laboral*, SENCE) | **Inglés Siempre Capacitaciones** | 19-02-2024 → 10-07-2024 | **480** (asistencia 100 %) | ⚠️ Solo por código SENCE | **RUT**, folio, QR, código |
| `ANDROID.pdf` | Desarrollo de Aplicaciones Móviles Android Trainee v2.0 (programa *Reinvéntate Talento Digital*, SENCE) | **Cooperativa de Trabajo Posiciona** | 11-12-2025 → 31-03-2026 | **465** (asistencia 97 %) | ⚠️ Solo por código SENCE | **RUT**, folio, QR, código |

**Total: 3 programas · 1.545 horas de formación técnica (2023–2026).** Es un buen dato para mostrar como cifra destacada.

> [!CAUTION]
> **Reglas de privacidad (obligatorias):**
> 1. **No se publica ningún PDF de SENCE.** Tapar el RUT con un recuadro **no basta**, porque el PDF (iTextSharp) mantiene la capa de texto y el RUT se puede copiar o buscar.
> 2. **No se publican el folio, el QR ni el código de verificación SENCE.** Con ellos se puede consultar el certificado original, que incluye el RUT.
> 3. En el sitio se usan **imágenes rasterizadas (JPG) ya tapadas** en RUT, folio, QR y código. Ya están generadas en `scratch/certs/` y verificadas visualmente.
> 4. `src/assets/pdf/` se agrega a `.gitignore`: los originales se quedan solo en tu equipo.

**Imágenes generadas (listas para copiar al proyecto):**

| Archivo en `scratch/certs/` | Tamaño | Uso |
|---|---|---|
| `mern-thumb.jpg` / `mern.jpg` | 34 KB / 79 KB | Miniatura / vista completa |
| `java-redacted-thumb.jpg` / `java-redacted.jpg` | 77 KB / 196 KB | Miniatura / vista completa (datos tapados) |
| `android-redacted-thumb.jpg` / `android-redacted.jpg` | 76 KB / 195 KB | Miniatura / vista completa (datos tapados) |

---

## 1. FASE A — Sección "Formación y certificaciones"

### A1. Seguridad de archivos
- `.gitignore` → agregar al final:
  ```gitignore
  # Certificados originales con datos personales (RUT). Nunca versionar.
  src/assets/pdf/
  ```
- Crear `src/assets/certificates/` y copiar los 6 JPG de `scratch/certs/` con estos nombres:
  `mern.jpg`, `mern-thumb.jpg`, `java.jpg`, `java-thumb.jpg`, `android.jpg`, `android-thumb.jpg`.

### A2. `src/data/educationData.js` (nuevo)
```js
import mernThumb from '../assets/certificates/mern-thumb.jpg';
import mernFull from '../assets/certificates/mern.jpg';
import javaThumb from '../assets/certificates/java-thumb.jpg';
import javaFull from '../assets/certificates/java.jpg';
import androidThumb from '../assets/certificates/android-thumb.jpg';
import androidFull from '../assets/certificates/android.jpg';

/** Estudios formales. 🟡 Completar con datos reales (ver §6). */
export const EDUCATION = [
  {
    id: 'university',
    title: 'Ingeniería en Informática',
    institution: '🟡 UNIVERSIDAD',
    period: '🟡 20XX – Actualidad',
    status: '🟡 Cursando',
  },
];

/**
 * Certification: {
 *   id, title, institution, program?, period, hours, skills: string[],
 *   image: { thumb, full, width, height, alt },
 *   credential: { label, url } | null   // verificación pública (solo Credly)
 *   note?: string                       // texto aclaratorio
 * }
 * Orden: del más reciente al más antiguo.
 */
export const CERTIFICATIONS = [
  {
    id: 'android',
    title: 'Desarrollo de Aplicaciones Móviles Android',
    institution: 'Cooperativa de Trabajo Posiciona · SENCE',
    program: 'Reinvéntate Talento Digital',
    period: 'Dic 2025 – Mar 2026',
    hours: 465,
    skills: ['Kotlin', 'Android', 'Jetpack', 'Git'],
    image: { thumb: androidThumb, full: androidFull, width: 1200, height: 1553, alt: 'Certificado SENCE de Desarrollo de Aplicaciones Móviles Android con datos personales protegidos' },
    credential: null,
    note: 'Certificado SENCE · código de verificación disponible a solicitud',
  },
  {
    id: 'java',
    title: 'Desarrollo de Aplicaciones Full Stack Java',
    institution: 'Inglés Siempre Capacitaciones · SENCE',
    program: 'Reconversión Laboral',
    period: 'Feb 2024 – Jul 2024',
    hours: 480,
    skills: ['Java', 'Spring', 'MySQL', 'JavaScript'],
    image: { thumb: javaThumb, full: javaFull, width: 1200, height: 1553, alt: 'Certificado SENCE de Desarrollo Full Stack Java con datos personales protegidos' },
    credential: null,
    note: 'Certificado SENCE · código de verificación disponible a solicitud',
  },
  {
    id: 'mern',
    title: 'Bootcamp Full Stack MERN & Mobile Apps',
    institution: 'Mindhub',
    period: 'Oct 2023',
    hours: 600,
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'React Native'],
    image: { thumb: mernThumb, full: mernFull, width: 1200, height: 929, alt: 'Certificado de egreso Mindhub del Bootcamp Full Stack MERN' },
    credential: { label: 'Verificar en Credly', url: 'https://www.credly.com/go/xK8ygr4G' },
  },
];

export const TOTAL_TRAINING_HOURS = CERTIFICATIONS.reduce((sum, cert) => sum + cert.hours, 0); // 1545
```
> Las etiquetas de `skills` de Android son una propuesta: ajústalas a lo que realmente vieron en el curso (Compose, Room, Retrofit, etc.).

### A3. `src/components/ui/CredentialCard.jsx` (nuevo)
- Etiqueta raíz: `<article className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-pink-500/10">`.
- **Miniatura:** `<a href={image.full} target="_blank" rel="noopener noreferrer">` que envuelve un contenedor `relative aspect-[4/3] overflow-hidden bg-white` con `<img src={image.thumb} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105">`. Lleva `aria-label="Ver certificado completo de {title} (abre en una pestaña nueva)"`.
- **Cuerpo** (`flex flex-1 flex-col gap-3 p-5 sm:p-6`):
  - Fila superior: `period` (`text-xs font-semibold uppercase tracking-wide text-gray-400`) + píldora de horas `"{hours} h"` (`rounded-full bg-pink-500/10 px-2.5 py-1 text-xs font-semibold text-pink-400`).
  - `<h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>`
  - `<p className="text-sm text-gray-300">{institution}</p>` y, si existe, `program` en `text-xs text-gray-500`.
  - Etiquetas de skills: `<ul className="flex flex-wrap gap-1.5">` con chips `rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300 ring-1 ring-inset ring-white/10`.
  - Acciones (`mt-auto flex flex-wrap gap-2 pt-2`):
    - `<Button href={image.full} size="sm" variant="secondary">Ver certificado</Button>`
    - Si `credential` → `<Button href={credential.url} size="sm" icon={<Icon name="external" />}>{credential.label}</Button>`
    - Si `note` → `<p className="text-xs text-gray-500">{note}</p>`
- `propTypes` completos (shape de `certification`).

### A4. `src/components/sections/Education.jsx` (nuevo)
- `SectionContainer` con `id="education"`, `eyebrow="Aprendizaje continuo"`, `title="Formación y"`, `highlight="certificaciones"`, `decoration="bottom-right"`.
- **Bloque 1 – Cifras** (`grid grid-cols-3 gap-3 sm:gap-4 mb-10`): tres tarjetas con un número grande (`text-2xl sm:text-3xl font-bold text-white`) y una etiqueta (`text-xs sm:text-sm text-gray-400`):
  `{CERTIFICATIONS.length} programas` · `{TOTAL_TRAINING_HOURS.toLocaleString('es-CL')} horas` · `2023–2026`.
- **Bloque 2 – Estudios formales:** tarjeta horizontal compacta por cada `EDUCATION` (título, institución, período y estado con un punto verde si está "Cursando").
- **Bloque 3 – Certificaciones:** `<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">` → `<li className="min-w-0"><CredentialCard certification={cert} /></li>`.

### A5. Navegación y orden
- `navigationData.js`: insertar `{ id: 'education', label: 'Formación', href: '#education' }` **entre `skills` y `about`**.
- `App.jsx`: importar `Education` y colocarlo entre `<Skills />` y `<About />`.
- Ancho verificado en desktop (768 px): marca + 6 enlaces ≈ 635 px < 720 px disponibles ✅.

---

## 2. FASE B — Proyectos, Hero, Habilidades y Sobre mí

### B1. Proyectos: quitar el relleno y enriquecer los datos
**`projectsData.js`:**
- **Eliminar** `project-two` y `project-three` (los de "En construcción").
- Nuevo esquema por proyecto (compatible con proyectos futuros):
  ```js
  {
    id, title, summary,            // 1 frase: qué problema resuelve
    description,                   // 2–3 frases: qué hiciste tú
    role: 'Full Stack',            // tu rol
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['…', '…', '…'],   // 2–3 logros concretos (auth, deploy, etc.)
    image: { src, alt, width, height },
    status: 'completed' | 'in-progress',
    demoUrl, repositories: [{ id, label, url }],
    featured: true,
  }
  ```
- Minga (borrador para ajustar): `summary: 'Plataforma web para leer, publicar y compartir mangas.'`, `stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']`. Los 🟡 highlights deben ser reales (por ejemplo autenticación JWT, roles autor/lector, CRUD de capítulos, despliegue en Vercel).

**`ProjectCard.jsx`:** agregar chips de `stack`, una lista breve de `highlights` (`list-disc pl-5 text-sm text-gray-300`) y `role` junto al título.

**`Projects.jsx`:** al final de la grilla, una tarjeta CTA fija **"Más proyectos en GitHub"** (borde punteado `border-2 border-dashed border-white/10`, ícono GitHub y `Button href="https://github.com/Benja0420"`). Así la grilla nunca queda con huecos ni relleno.

### B2. Hoja de ruta de proyectos nuevos (para construir fuera de este repo)
Cada uno respalda un certificado y conecta con tus intereses (bici, escalada, anime, juegos de mesa), lo que lo hace más memorable que un clon genérico:

| # | Proyecto | Respalda | Stack sugerido | Lo que un reclutador busca ver |
|---|---|---|---|---|
| 1 | **App Android de registro de rutas** (bici o escalada: rutas, grados, progreso) | Android 465 h | Kotlin, Jetpack Compose, Room, Retrofit, MVVM | APK o video demo, arquitectura MVVM, persistencia offline, tests unitarios |
| 2 | **API REST de reservas o turnos** + panel web | Java 480 h | Java 17, Spring Boot, Spring Security (JWT), MySQL, Docker, React + TS | Swagger/OpenAPI, `docker compose up`, tests con JUnit, CI en GitHub Actions |
| 3 | **Ludoteca**: gestor de partidas de juegos de mesa con amigos (rankings, historial) | MERN 600 h | Next.js o React + TS, Node/Express o Nest, MongoDB | Deploy público, auth, UI responsiva, README con capturas |

**Checklist por repo:** README con captura/GIF, demo en línea, sección "Cómo correrlo", stack, decisiones técnicas y repo fijado (pinned) en GitHub.

### B3. Hero
- `Eyebrow` → reemplazar "Bienvenido a mi portafolio" por **disponibilidad** con punto verde: 🟡 `"Disponible para trabajar"` (agregar el acento `green` a `accentStyles.js`).
- Bajo el subtítulo: línea de ubicación `📍 Chillán, Chile · Remoto / Híbrido` (`text-sm text-gray-400`, con ícono SVG en lugar de emoji).
- CTAs: **primario** `Ver proyectos` (`href="#projects"`) + **secundario** `Currículum` + botones de solo ícono para LinkedIn y GitHub (`size="icon"`, con `aria-label`). Mismo comportamiento responsivo `stackOnMobile`.

### B4. Habilidades agrupadas por área
`skillsData.js` → reemplazar las 3 categorías por:

| Categoría | Acento | Skills |
|---|---|---|
| Frontend | pink | HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS |
| Backend | purple | Node.js, Express, Java, Spring |
| Mobile | green | Kotlin (Android), React Native, Swift |
| Bases de datos | blue | MySQL, MongoDB |
| Herramientas | amber | Git, Docker, Linux |

- Línea final "Explorando:" en chips de texto: Angular, NestJS, Next.js.
- 🟡 **Se quitan Windows y MacOS** (aportan poca señal; los SVG quedan en `assets` pero no se importan, así que no pesan en el build).
- Grilla de categorías: `grid gap-10 md:grid-cols-2` (Frontend con `md:col-span-2`).
- `accentStyles.js`: agregar `green` y `amber` con la misma forma que `pink`.

### B5. Sobre mí
- Una tarjeta de **3–4 líneas** (versión corta del texto actual) + una lista de datos rápidos `grid sm:grid-cols-2`:
  `Ubicación: Chillán, Chile` · `Idiomas: Español nativo, 🟡 Inglés (nivel)` · `Intereses: bici, escalada, anime, juegos de mesa` · `Enfoque: apps móviles e IA`.
- El texto largo actual se archiva en `aboutData.js` como `extended` por si quieres un "Leer más" a futuro.

### B6. Vista previa al compartir (`index.html`)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://benjaminsepulveda.ninja/" />
<meta property="og:title" content="Benjamín Sepúlveda · Desarrollador Full Stack" />
<meta property="og:description" content="Desarrollador Full Stack (React, Node, Java/Spring, Kotlin). Proyectos, certificaciones y contacto." />
<meta property="og:image" content="https://benjaminsepulveda.ninja/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```
- `public/og-image.jpg` (1200×630): se genera con nombre, rol y paleta del sitio.

---

## 3. FASE C — Formulario de contacto funcional (Web3Forms)

**Por qué Web3Forms:** 0 dependencias, 250 envíos/mes gratis, no requiere backend y su `access_key` está **diseñada para ser pública** (solo permite enviar a tu correo).

### C1. Configuración
- Obtener la clave en web3forms.com ingresando 🟡 el correo donde quieres recibir los mensajes.
- Crear `.env.example` (versionado):
  ```dotenv
  # Clave pública de https://web3forms.com (los mensajes llegan al correo asociado)
  VITE_WEB3FORMS_ACCESS_KEY=
  ```
- Crear `.env.local` (ignorado por `*.local` en `.gitignore`) con la clave real.
- 🟡 Registrar la misma variable en el panel del hosting (Vercel/Netlify) y volver a desplegar.

### C2. Cambios en `src/components/sections/Contact.jsx`
- Constante `const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;`
- Estado nuevo `botcheck` (honeypot), con un input oculto:
  `<input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" checked={botcheck} onChange={(e) => setBotcheck(e.target.checked)} aria-hidden="true" />`
- Reemplazar el `setTimeout` dentro del `try` por:
  ```js
  if (!WEB3FORMS_ACCESS_KEY) throw new Error('Falta VITE_WEB3FORMS_ACCESS_KEY');
  if (botcheck) { setSubmitStatus('success'); return; } // bot: se descarta en silencio

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'Portafolio · benjaminsepulveda.ninja',
      subject: `Portafolio: ${formData.subject}`,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      replyto: formData.email,
    }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result.message || 'Error en el envío');
  ```
- El mensaje de error pasa a: *"No se pudo enviar el mensaje. Escríbeme por LinkedIn mientras lo soluciono."* con enlace a LinkedIn.
- Se mantienen la validación, los estados, el spinner y la accesibilidad actuales.

---

## 4. Orden de ejecución

| Paso | Acción | Verificación |
|---|---|---|
| 0 | **Commit del refactor actual** (todo está sin commitear) | `git status` limpio |
| A1–A5 | Certificaciones + navegación | `lint` + `build` ✅, la sección se ve desde 320 px |
| B1, B3–B6 | Proyectos, Hero, Skills, About, OG | `lint` + `build` ✅ |
| C1–C2 | Contacto real | Envío de prueba en `npm.cmd run dev` → llega el correo |
| Final | `npm.cmd run lint` y `npm.cmd run build` | 0 errores / 0 warnings |

---

## 5. Lo que NO se hará (a propósito)
- Visor de PDF embebido o modal con `<iframe>` (falla en iOS).
- Publicar folio, QR o código de verificación SENCE.
- Tarjetas "En construcción" o proyectos de relleno.
- Nuevas dependencias (todo con lo ya instalado y `fetch` nativo).

---

## 6. 🟡 Datos pendientes del propietario
1. **Universidad:** institución, año de inicio y estado (cursando / egresado / año estimado de egreso).
2. **Disponibilidad** para el Hero: trabajo full-time, práctica profesional y/o freelance, y modalidad (remoto / híbrido / presencial).
3. **Nivel de inglés.**
4. **Hosting** de benjaminsepulveda.ninja (Vercel, Netlify, GitHub Pages…) y **correo** donde recibir los mensajes de contacto.
5. **Confirmar** que se quitan Windows y MacOS de Habilidades y que "Interesado en" pasa a una línea de "Explorando".
6. **Minga:** 2–3 funcionalidades reales que implementaste (para los `highlights`).
