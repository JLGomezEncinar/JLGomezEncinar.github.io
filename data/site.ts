/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://JLGomezEncinar.github.io',
  meta: {
    title: 'José Luis Gómez | Desarrollador de Aplicaciones Multiplataformas',
    description:
      'Portfolio example: shipping reliable web products with clear architecture, tests, and delivery practices.',
  },
  hero: {
    name: 'José Luis Gómez',
    role: 'Desarrollador de Aplicaciones Multiplataformas',
    tagline: 'Comenzando con el desarrollo, intentando seguir buenas prácticas creando código sostenible.',
    contact: 'Abierto a la colaboración con cualquier equipo de desarrollo de software.',
    avatarSrc: '/foto.jpg',
    avatarAlt: 'José Luis Gómez',
  },
  about: {
    paragraphs: [
      'Recién terminado el grado de DAM en Junio de 2026, mostrando los diferentes proyectos desarrollados durante mis estudios y a posteriori.',
      'Me preocupo de desarrollar proyectos con buena estructura, que sean escalables y cubran necesidades a posibles problemas de la vida real.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Experiencia con APIs y diferentes bases de datos',
          'Conocimiento de diferentes lenguajes de programación',
          'Buena utilización de los agentes de IA',
        ],
      },
      {
        heading: 'Sample stack',
        techItems: ['React', 'Java', 'Python', 'Kotlin'],
      },
    ],
  },
  experiences: [
    {
      period: '2026',
      title: 'Prácticas 2º DAM',
      company: 'Itecan',
      summary:
        'Prácticas de 2º DAM realizadas en una empresa especializada en el ERP Odoo.',
      highlights: [
        'Desarrollo y modificación de módulos de Odoo',
        'Consultas en base de datos PostgreSQL',
        'Utilización de lenguaje Python y OWL (JavaScript)',
      ],
      tech: ['Odoo', 'PostgreSQL', 'Python', 'OWL (JavaScript)'],
    },
    {
      period: '2025',
      title: 'Prácticas 1º DAM',
      company: 'eComputer',
      summary:
        'Prácticas de 1º DAM realizadas en una empresa del sector informático.',
      highlights: [
        'Modificación e implementación de nuevas características de una aplicación móvil',
        'Llamadas CRUD a una API',
        'Utilización de lenguaje Flutter',
      ],
      tech: ['API', 'Flutter'],
    },
  ],
  featuredProjects: [
    {
      title: 'Buscador de localizaciones (Alpha)',
      period: '2026',
      summary: 'Una aplicación móvil donde debemos llegar a las localizaciones marcadas.',
      solution: 'Utilizando Kotlin y JetPack Compose creamos una sencilla aplicación con los datos de las localizaciones ya cargados.',
      impact: 'Una aplicación que se puede utilizar para realizar gymkanas de búsqueda de objetivos o aplicaciones para localizar lugares relevantes.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Kotlin', 'JetPack Compose'],
        },
        {
          category: 'Performance',
          items: ['GeoFencing', 'Battery Management'],
        },
      ],
    },
    {
      title: 'Activador de llamada (Alpha)',
      period: '2026',
      summary: 'Una sencilla aplicación móvil que realiza una llamada a un número establecido cuando nota una sacudida.',
      solution: 'Utilizando Kotlin y JetPack Compose creamos una aplicación con el número ya introducido.',
      impact: 'Una aplicación útil para instalar en dispositivos de personas mayores que no tienen mucho conocimiento de tecnología.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Kotlin', 'JetPack Compose'],
        },
        {
          category: 'Performance',
          items: ['Battery Management'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'joseluisgomezencinar@gmail.com',
    github: 'https://github.com/JLGomezEncinar',
    linkedin: 'https://es.linkedin.com/in/jose-luis-g%C3%B3mez-encinar-50959826a',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
