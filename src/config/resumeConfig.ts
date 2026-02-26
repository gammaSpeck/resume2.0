// Resume Configuration
// Edit this file to customize your resume
// Icons can be found at https://pictogrammers.com/library/mdi/

// Basic Information
export const personalInfo = {
  firstName: "Madhusoodhanan",
  lastName: "KM",
  title: "Principal Engineer",
  avatar: "md.jpeg", // Place this file in src/assets
  summary:
    "Principal Engineer with 7+ years of experience architecting scalable platforms, leading distributed system design, and driving engineering excellence through DevOps automation and AI-driven development practices. Expert in end-to-end system design, cloud-native infrastructure, and building high-performance teams.",
  pdfFilename: "madhu-km-resume.pdf" // This will be used for both download and generation
};

// Contact Information
export const contactInfo = [
  { icon: "mdi-phone", title: "+91-9738575801", link: "tel:+919738575801" },
  {
    icon: "mdi-github",
    title: "gammaSpeck",
    link: "https://github.com/gammaSpeck"
  },
  {
    icon: "mdi-linkedin",
    title: "madhusoodhanan-km",
    link: "https://www.linkedin.com/in/madhusoodhanan-km"
  },
  {
    icon: "mdi-email",
    title: "tech@madhukm.com",
    link: "mailto:tech@madhukm.com"
  },
  { icon: "mdi-home", title: "Bengaluru, Karnataka, India" }
];

// Experience
export const experience = {
  sections: [
    {
      company: "Louisa AI",
      positions: [
        {
          id: 1,
          title: "Principal Engineer",
          timeline: "Mar 2025 - Present",
          desc: "Architected Space-Time Overlaps system processing 1.4B+ relationship records with AI-powered multi-dimensional scoring. Designed scalable Graph Service handling millions of email relationships with separated Worker/API layers for independent horizontal scaling. Leading React 18 migration while reducing Docker image sizes by 72%. Established Grafana K6 as company-wide load testing standard with automated CI/CD pipelines and self-hosted runners. Deployed organization-wide automated release management using Release Please. Champion AI-driven development practices including GitHub Copilot adoption and implemented enterprise-wide CI/CD improvements with automated security scanning and streamlined Git workflows."
        }
      ]
    },
    {
      company: "Ollion",
      positions: [
        {
          id: 1,
          title: "Lead Product Developer",
          timeline: "Apr 2023 - Mar 2025",
          desc: "Core team of DataPipes - A cloud native Data Management Platform. Managed end-to-end code and infrastructure of microservices, led team of developers, and completed Vue2 to Vue3 migration. Represented product at international tech events."
        },
        {
          id: 2,
          title: "Senior Developer",
          timeline: "Apr 2022 - Apr 2023",
          desc: "Owned critical components, spearheaded Webpack to Vite migration, and collaborated with UX teams to enhance user experience and front-end performance."
        },
        {
          id: 3,
          title: "Developer",
          timeline: "May 2021 - Apr 2022",
          desc: "Led Javascript to Typescript migrations, optimized containerization, and developed web pages and REST APIs."
        }
      ]
    },
    {
      company: "Cardinal Health",
      positions: [
        {
          title: "Associate Software Engineer",
          timeline: "Jun 2019 - May 2021",
          desc: "Built architectural frameworks in NodeJS and React.js, deployed to Kubernetes, designed and launched Admin Console MVP, and served as technical interviewer for campus recruitment."
        },
        {
          title: "Software Engineering Intern",
          timeline: "Jan 2019 - Jun 2019",
          desc: "Developed microservices using Serverless Framework and created shared repository of reusable modules."
        }
      ]
    }
  ]
};

// Languages
export const languages = [
  {
    name: "English",
    proficiency: "Advanced"
  },
  {
    name: "Hindi",
    proficiency: "Proficient"
  },
  {
    name: "Tamil",
    proficiency: "Intermediate"
  },
  {
    name: "Malayalam",
    proficiency: "Intermediate"
  }
];

// Skills
export const skills = {
  codingLanguages: [
    { title: "Javascript", icon: "mdi-language-javascript" },
    { title: "Typescript", icon: "mdi-language-typescript" },
    { title: "Python", icon: "mdi-language-python" },
    { title: "Shell", icon: "mdi-powershell" }
  ],
  frontend: [
    "Vue",
    "React",
    "NextJS",
    "Nuxt",
    "Cypress",
    "Playwright",
    "Web Components",
    "Tailwind",
    "PWA"
  ],
  backend: [
    "NodeJS",
    "Express",
    "NestJS",
    "WebSockets",
    "Serverless",
    "Postgres",
    "Neo4j",
    "MongoDB",
    "NATS",
    "Redis"
  ],
  devops: [
    "AWS",
    "CICD",
    "Docker",
    "Kubernetes",
    "HELM",
    "Terraform",
    "Jenkins",
    "k6",
    "Grafana",
    "GitHub Actions"
  ]
};

// Projects
export const projects = [
  {
    name: "AI Influencer Marketing Platform",
    description:
      "End-to-end influencer marketing automation platform with AI-powered creator discovery, automated outreach & negotiation, contract management with e-signatures, milestone-based payment processing, real-time performance analytics, and comprehensive campaign lifecycle management.",
    links: [
      { icon: "mdi-youtube", url: "https://www.loom.com/share/7f73e5f25cf44b809f45a316c49a24f0" },
      {
        icon: "mdi-post-outline",
        url: "https://medium.com/@hjqwjc/how-to-launch-an-ai-product-in-21-days-371c71b2f794"
      },
      { icon: "mdi-web", url: "https://influencer-flow-ai.netlify.app" }
    ]
  },
  {
    name: "Expense Tracker PWA",
    description:
      "Privacy-first, open source PWA for tracking and analyzing personal expenses. No accounts, no backend, pure client-side financial management with data stored locally for complete user privacy.",
    links: [
      { icon: "mdi-github", url: "https://github.com/gammaSpeck/expense-tracker" },
      { icon: "mdi-web", url: "https://extrack.madhukm.com" }
    ]
  }
];

// Education
export const education = [
  {
    degree: "Bachelors in CSE",
    grade: "CGPA 7.3/10",
    school: "CMRIT",
    from: "2015",
    to: "2019"
  },
  {
    degree: "PUC - PCMB",
    grade: "84%",
    school: "Christ Junior College",
    from: "2013",
    to: "2015"
  },
  {
    degree: "Secondary Education",
    grade: "92%",
    school: "St Thomas Public School",
    from: "",
    to: "2013"
  }
];

// Theme settings
export const themeSettings = {
  primaryColor: "#1867C0", // Default Vuetify primary color
  backgroundColor: "#fff",
  textColor: "#000",
  accentColor: "#1867C0"
};
