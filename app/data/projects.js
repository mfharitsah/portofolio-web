/**
 * Project content registry.
 *
 * Add or edit projects here. Image paths point to files inside
 * public/projects/<slug>/. See PROJECTS_GUIDE.md for the full workflow.
 */
export const projects = [
  {
    slug: 'halfamanage',
    featured: true,
    featuredOrder: 1,
    title: 'HalfaManage',
    category: 'Employee Management',
    group: 'Web',
    cover: '/projects/halfamanage/cover.png',
    coverAlt: 'HalfaManage employee management dashboard interface',
    intro:
      'A full-stack platform for managing employee records, activity, and performance.',
    role: 'Full-stack Developer',
    timeline: 'Apr 2024 — May 2024',
    team: 'Team project',
    stack: ['React', 'Vite', 'Express.js', 'PostgreSQL', 'Figma'],
    overview: [
      'HalfaManage is a web-based employee management platform that helps teams maintain employee profiles, monitor activity, and manage performance from a single operational dashboard.',
      'The product combines an approachable frontend experience with a structured backend so routine employee administration is easier to navigate and maintain.',
    ],
    solutionImpact: [
      'I developed the React frontend, translating the interface direction into responsive account, dashboard, and employee-management flows. I also contributed to the Express and PostgreSQL backend by improving API endpoints and database queries.',
      'The resulting workflow gives users a clearer way to add employees, update profiles, and review team information without moving between disconnected tools.',
    ],
    impactPoints: [
      'Responsive employee and account-management interfaces',
      'Integrated frontend flows with Express API endpoints',
      'More efficient PostgreSQL query and data-handling flow',
    ],
    gallery: [
      {
        src: '/projects/halfamanage/gallery-01.png',
        alt: 'HalfaManage interface montage',
      },
    ],
    links: {
      repository: 'https://github.com/mfharitsah/Technoskill-AdminDashboard',
    },
  },
  {
    slug: 'ime-ftui-2024',
    featured: true,
    featuredOrder: 2,
    title: 'IME FTUI 2024',
    category: 'Frontend Development',
    group: 'Web',
    cover: '/projects/ime-ftui-2024/cover.png',
    coverAlt: 'IME FTUI 2024 website interface',
    intro:
      'The official information and service platform for Ikatan Mahasiswa Elektro FTUI 2024.',
    role: 'Lead Frontend Developer',
    timeline: 'Mar 2024 — Oct 2024',
    team: 'Led three contributors',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
    overview: [
      'The IME FTUI 2024 website served as the organization’s main channel for activities, advocacy, academic information, contacts, and student-facing services.',
      'The experience needed to remain visually rich while making a large amount of organizational content easy to discover across devices.',
    ],
    solutionImpact: [
      'As Lead Frontend Developer, I coordinated three contributors, developed half of the website’s interface and features, and guided delivery toward shared milestones.',
      'I also optimized image-heavy pages to improve rendering performance and make the site feel more responsive while retaining its visual identity.',
    ],
    impactPoints: [
      'Led task planning and frontend delivery across the team',
      'Built responsive information and service pages',
      'Improved rendering behavior for image-heavy content',
    ],
    gallery: [
      {
        src: '/projects/ime-ftui-2024/gallery-01.png',
        alt: 'IME FTUI 2024 website montage',
      },
    ],
    links: {
      repository: 'https://github.com/mfharitsah/Website-IMEFTUI2024',
    },
  },
  {
    slug: 'travelinaja',
    featured: true,
    featuredOrder: 3,
    title: 'TravelinAja',
    category: 'Android Application',
    group: 'Mobile',
    cover: '/projects/jbus/cover1.png',
    coverAlt: 'JBus Android and Java technology preview',
    intro:
      'A bus-ticket booking application with search by operator, destination, and departure date.',
    role: 'Full-stack Mobile Developer',
    timeline: '2023',
    team: 'Academic project',
    stack: ['Java', 'Android Studio', 'Spring'],
    overview: [
      'JBus explores an end-to-end ticket-booking flow for Android, allowing users to find available buses using practical travel criteria and continue through the booking experience.',
      'The project connected an Android client with a Java-based service architecture as part of an object-oriented programming project.',
    ],
    solutionImpact: [
      'I implemented the application flow across the mobile client and backend domain, organizing the code around reusable object-oriented models and service responsibilities.',
      'The project strengthened my understanding of client-server communication, Android interface development, and translating a real booking workflow into software entities.',
    ],
    impactPoints: [
      'Search flow by operator, destination, and departure date',
      'Android client connected to a Java service layer',
      'Object-oriented domain and booking-flow implementation',
    ],
    gallery: [
      {
        src: '/projects/jbus/gallery-00.png',
        alt: 'JBus project technology preview',
      },
      {
        src: '/projects/jbus/gallery-02.png',
        alt: 'JBus project technology preview',
      },
      {
        src: '/projects/jbus/gallery-03.png',
        alt: 'JBus project technology preview',
      },
      {
        src: '/projects/jbus/gallery-04.png',
        alt: 'JBus project technology preview',
      },
      {
        src: '/projects/jbus/gallery-05.png',
        alt: 'JBus project technology preview',
      }
    ],
    links: {
      repository: 'https://github.com/mfharitsah/TravelinAja',
    },
  },
  {
    slug: 'uihelp',
    featured: false,
    title: 'UIHelp',
    category: 'Incident Reporting Platform',
    group: 'Web',
    cover: null,
    intro:
      'A campus incident-reporting platform that routes reports to UI security and supports administrative follow-up.',
    role: 'Full-stack Developer',
    timeline: 'Sep 2024 — Nov 2024',
    team: 'Team project',
    stack: ['React', 'Tailwind CSS', 'Axios', 'Express.js', 'PostgreSQL'],
    overview: [
      'UIHelp was designed to simplify incident reporting across the Universitas Indonesia campus and help reports reach PLK UI with the information needed for a timely response.',
      'The platform includes a focused reporting flow for users and an administrative view for managing report status and incident information.',
    ],
    solutionImpact: [
      'I contributed across the React frontend and Express/PostgreSQL backend, including API integration with Axios, endpoint logic, and SQL query optimization.',
      'The result brings submission, status management, and incident visibility into one cohesive workflow for reporters and administrators.',
    ],
    impactPoints: [
      'Streamlined incident submission workflow',
      'Administrative status and reporting interface',
      'Improved endpoint logic and SQL query flow',
    ],
    gallery: [],
    links: {},
  },
  {
    slug: 'cctv-esp32-cam',
    featured: false,
    title: 'CCTV ESP32-CAM',
    category: 'IoT Surveillance System',
    group: 'IoT',
    cover: null,
    intro:
      'A connected surveillance prototype with camera streaming, joystick control, and real-time notifications.',
    role: 'IoT Developer',
    timeline: 'Oct 2024 — Nov 2024',
    team: 'Team project',
    stack: ['ESP32-CAM', 'Firebase', 'Telegram API', 'C++'],
    overview: [
      'The CCTV ESP32-CAM project combines video streaming with remote camera positioning to create a more interactive monitoring prototype.',
      'A second ESP32 reads joystick input and communicates through Firebase, while Telegram provides a practical notification and remote-control channel.',
    ],
    solutionImpact: [
      'I implemented the Firebase communication flow and the logic that converts joystick X, Y, and button input into camera movement commands.',
      'This architecture separated input and camera responsibilities while keeping both devices synchronized through real-time data.',
    ],
    impactPoints: [
      'Real-time device communication through Firebase',
      'Joystick-driven camera movement logic',
      'Telegram notifications and remote interaction',
    ],
    gallery: [],
    links: {},
  },
  {
    slug: 'rentlab',
    featured: false,
    title: 'RentLab',
    category: 'Laboratory Operations',
    group: 'Web',
    cover: null,
    intro:
      'A two-sided platform for managing laboratory equipment availability, requests, approvals, and loan history.',
    role: 'Full-stack Developer',
    timeline: 'Apr 2024 — May 2024',
    team: 'Team project',
    stack: ['React', 'Express.js', 'PostgreSQL'],
    overview: [
      'RentLab digitizes the laboratory-equipment borrowing process for students and administrators. Users can browse inventory by laboratory and submit requests, while administrators manage availability and approval decisions.',
      'The system also retains completed transaction records so the borrowing lifecycle remains visible after an item is returned.',
    ],
    solutionImpact: [
      'The interface separates user and administrator responsibilities while keeping inventory, requests, approvals, and history connected to the same workflow.',
      'This reduces the friction of manual equipment coordination and gives each side a clearer view of request status and availability.',
    ],
    impactPoints: [
      'Inventory organized by laboratory and availability',
      'Request approval and rejection workflow',
      'Transaction history for completed equipment loans',
    ],
    gallery: [],
    links: {},
  },
];

export const getFeaturedProjects = () =>
  projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
};

export const projectGroups = [
  'All',
  ...new Set(projects.map((project) => project.group)),
];
