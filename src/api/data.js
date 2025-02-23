export const PROJECTS_DETAILS = [
  {
    id: 'maisons-du-monde',
    type: 'pro',
    title: 'Développeuse front-end Vue 3',
    company: 'Maisons du Monde',
    link: '/project/maisons-du-monde',
    externalLink: {
      cta: 'maisonsdumonde.com',
      link: 'https://www.maisonsdumonde.com/',
    },
    dates: `2021 - Aujourd'hui`,
    context: 'Refonte du site e-commerce Maisons du Monde',
    description: `Dans le cadre de la refonte du site e-commerce Maisons du Monde, j'interviens en tant que développeuse front-end Vue 3.
    La refonte s'inscrit dans un cadre de travail Agile et en partenariat avec une equipe de designers et de developpeurs.`,
    size: 'large',
    list: [
      'Refonte front-end et back-for-front en SSR avec <b>Vue 3 Composition API</b>, <b>TypeScript</b>, <b>Node</b>, <b>Koa</b>, <b>Tailwind</b>, <b>GraphQL</b>',
      'Maintenance évolutive : amélioration continue du site pour répondre aux enjeux commerciaux',
      'Développement d’applications spécifiques pour les vendeurs, entrepôt et un back-office',
      'Cadrage et développement du <b>Design System</b> : collaboration avec l’équipe UX/UI pour la conception des composants, visualisation via <b>Histoire</b> et <b>Storybook</b>',
      'Mise en place de tests unitaires et end-to-end en <b>TDD</b> avec <b>Vitest</b>',
      'Développement pour le headless CMS <b>Prismic</b>',
      'Travail en méthodologie <b>Agile Scrum</b> avec des démos régulières',
      'Release management : supervision des déploiements en production',
      'Performances : suivi des <b>Web Vitals</b> et optimisation',
      'Monitoring et analyse : suivi des performances et des erreurs en temps réel avec <b>New Relic</b>',
      'SEO : optimisation SEO pour améliorer la visibilité du site',
      'A/B tests avec <b>Unleash</b> et <b>AB Tasty</b>, suivi des performances avec <b>Google Analytics</b> et <b>Tag Commander</b>',
    ],
    images: ['mdm-1'],
    stack: [
      'Vue 3',
      'Node.js',
      'Tailwind CSS',
      'GraphQL',
      'Prismic CMS',
      'Vitest',
      'Vite',
      'New Relic',
      'Suite Atlassian',
      'Postman',
      'Vite',
    ],
  },
  {
    id: 'fiters',
    type: 'pro',
    title: 'Développeuse full-stack JS',
    company: 'Fiters',
    link: '/project/fiters',
    externalLink: {
      cta: 'fiters.co',
      link: 'https://www.fiters.co/',
    },
    dates: `Février 2021 à septembre 2021 (8 mois)`,
    context: 'Refonte du site vitrine et développement sur les 3 webapps',
    description: `Fiters est une entreprise qui propose des solutions et programmes de coaching sportif en entreprise`,
    size: 'small',
    list: [
      'Refonte du site vitrine avec <b>Vue 2</b> et <b>Quasar</b> pour le front-end et <b>Node.js</b> et <b>Firebase</b> pour le développement back-end',
      'Développement de trois webapps dédiées : application pour les coachs, tableau de bord pour les entreprises clientes, application pour les collaborateurs',
      'Intégration d’un CMS headless <b>Contentful</b>',
      'Collaboration client et suivi',
    ],
    images: ['fiters-1'],
    stack: [
      'Vue 2',
      'Node.js',
      'Firebase',
      'Headless CMS Contentful',
      'Quasar',
    ],
  },
  {
    id: 'bnp-paribas',
    type: 'pro',
    title: 'Product owner',
    company: 'BNP Paribas',
    link: '/project/bnp-paribas',
    externalLink: {
      cta: '',
      link: '',
    },
    dates: `Octobre 2016 à mars 2020 (3 ans et demi)`,
    context: "Refonte de l'intranet du Groupe",
    description: `Développement d’un intranet destiné à l’ensemble du Groupe BNP Paribas (280k collaborateurs)`,
    size: 'small',
    list: [
      `Méthodologie Scrum (sprint planning, review, rétrospective, daily meeting) `,
      `Conception et rédaction des spécifications fonctionnelles (US)`,
      `Création des parcours utilisateurs et présentation aux parties prenantes `,
      `Rapports de suivi (sprint report, vélocité)`,
      `Présentation des évolutions et rapports au top management`,
    ],
    images: ['bnpparibas-1'],
    stack: ['Jira', 'Confluence', 'Photoshop', 'Invision'],
  },
  {
    id: 'bnp-paribas-webdesigner',
    type: 'pro',
    title: 'Webdesigner, alternance',
    company: 'BNP Paribas',
    link: '',
    externalLink: {
      cta: 'Github',
      link: '',
    },
    dates: `Octobre 2014 à septembre 2016 (2 ans)`,
    context: '',
    description: '',
    size: 'small',
    list: [],
    images: [''],
    stack: [],
  },
  {
    id: 'pomodoro-timer',
    type: 'other',
    title: 'Pomodoro timer',
    link: '/project/pomodoro-timer',
    externalLink: {
      cta: 'Github',
      link: 'https://github.com/celina-ngth/vue3-pomodorotimer',
    },
    context: 'Un timer basé sur la méthode Pomodoro',
    description:
      'Une application simple et efficace de gestion du temps basée sur la méthode Pomodoro. Cette application permet de structurer timer des cycles de travail et de pauses pour améliorer la productivité.',
    images: ['pomodoro-1', 'pomodoro-2', 'pomodoro-3'],
    size: 'large',
    stack: ['Vue 3 composition API', 'Typescript'],
  },
  {
    id: 'medium',
    type: 'other',
    title: 'Medium',
    link: '/project/medium',
    externalLink: {
      cta: 'Github',
      link: 'https://github.com/celina-ngth/next-blogapp',
    },
    context: 'Copycat du site Medium',
    description:
      'Une reproduction du célèbre site d’information Medium, développée en Next.js et TypeScript. Cette application consomme une API fictive fournissant de fausses données pour afficher des articles. L’objectif : recréer l’expérience utilisateur de Medium avec un rendu SSR.',
    images: ['medium-1', 'medium-2'],
    size: 'small',
    stack: ['Nextjs', 'React', 'Typescript', 'Tailwind'],
  },
  {
    id: 'todo-app',
    type: 'other',
    title: 'Todo app',
    link: '/project/todo-app',
    externalLink: {
      cta: 'Github',
      link: 'https://github.com/celina-ngth/react-todoapp',
    },
    context: 'Juste une autre todo app',
    description:
      'Une simple todo app qui permet d’ajouter, modifier et supprimer des tâches en toute simplicité.',
    images: ['todoapp-1'],
    size: 'small',
    stack: ['React', 'Typescript', 'Tailwind'],
  },
]

export const EDUCATION = [
  {
    title: 'Software craftsmanship TDD',
    company: 'Human Coders',
    dates: '2024',
  },
  {
    title: 'Vue3 Composition API avancé',
    company: 'Human Coders',
    dates: '2023',
  },
  {
    title: `Concepteur développeur d'applications`,
    company: 'Afpa',
    dates: '2020 - 2021',
  },
  {
    title: 'Agile Scrum',
    company: 'Esic',
    dates: '2018',
  },
  {
    title: 'Master Cultures et Métiers du Web',
    company: 'Université Gustave Eiffel',
    dates: '2014 - 2016',
  },
  {
    title: 'Licence Infographie et Webdesign',
    company: 'Université Sorbonne Paris Nord',
    dates: '2011 - 2014',
  },
]

export const TOOLS = [
  {
    name: 'Vue 3 Composition API',
    type: 'Framework',
    icon: 'vuejs',
    category: 'framework',
  },
  {
    name: 'React',
    type: 'Framework',
    icon: 'react',
    category: 'framework',
  },
  {
    name: 'Typescript',
    type: 'Langage',
    icon: 'typescript',
    category: 'language',
  },
  {
    name: 'JavaScript',
    type: 'Langage',
    icon: 'javascript',
    category: 'language',
  },
  {
    name: 'NextJS',
    type: 'Framework',
    icon: 'nextjs',
    category: 'framework',
  },
  {
    name: 'Tailwind',
    type: 'Framework CSS',
    icon: 'tailwindcss',
    category: 'framework',
  },
  {
    name: 'Design System',
    type: 'Design',
    icon: 'designsystem',
    category: 'design',
  },
  {
    name: 'Figma',
    type: 'Design',
    icon: 'figma',
    category: 'design',
  },
  {
    name: 'GraphQL',
    type: 'API',
    icon: 'graphql',
    category: 'api',
  },
  {
    name: 'Git',
    type: 'Versionning',
    icon: 'git',
    category: 'tool',
  },
  {
    name: 'Storybook',
    type: 'Visualisation de composants',
    icon: 'storybook',
    category: 'designsystem',
  },
  {
    name: 'Nuxt',
    type: 'Framework',
    icon: 'nuxt',
    category: 'framework',
  },
  {
    name: 'Vitest',
    type: 'Tests',
    icon: 'vitest',
    category: 'tests',
  },
  {
    name: 'Prismic',
    type: 'Headless CMS',
    icon: 'prismic',
    category: 'cms',
  },
  {
    name: 'Urql',
    type: 'API',
    icon: '',
    category: 'api',
  },
  {
    name: 'API Rest',
    type: 'API',
    icon: '',
    category: 'api',
  },
  {
    name: 'Pinia',
    type: 'State management',
    icon: '',
    category: 'state',
  },
  {
    name: 'VueX',
    type: 'State management',
    icon: '',
    category: 'state',
  },
  {
    name: 'Méthode Agile Scrum',
    type: 'Méthodologie',
    icon: '',
    category: 'methodology',
  },
  {
    name: 'TDD',
    type: 'Méthodologie',
    icon: '',
    category: 'methodology',
  },
  {
    name: 'Histoire',
    type: 'Visualisation de composants',
    icon: '',
    category: 'designsystem',
  },
  {
    name: 'Architecture microservice',
    type: 'API',
    icon: '',
    category: 'api',
  },
]
