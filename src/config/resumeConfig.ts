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
    "Principal Engineer with 7+ years architecting scalable platforms that are AI-native, agentic systems, RAG pipelines on distributed, cloud-native infrastructure. Drives AI-first engineering culture who automates the SDLC end-to-end, and leads high-performance teams.",
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
          desc: "Run lean teams shipping AI at scale. Architected Space-Time Overlaps scoring 1.4B+ relationship records, and a Graph Service over millions of email relationships with separated Worker/API layers for independent horizontal scaling. Shipped AI agents with multi-tool-call orchestration and MCP servers exposing external connectors. Set perf testing standards and deployed organization-wide automated release management using Release Please"
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
          desc: "Core team of DataPipes, a cloud-native Data Management Platform. Led developers, owned microservice code and infra, drove Vue2 to Vue3 migration, managed pre-sales at international tech events."
        },
        {
          id: 2,
          title: "Senior Developer",
          timeline: "Apr 2022 - Apr 2023",
          desc: "Owned critical components, spearheaded Webpack to Vite migration, partnered with UX on front-end performance."
        },
        {
          id: 3,
          title: "Developer",
          timeline: "May 2021 - Apr 2022",
          desc: "Led Javascript to Typescript migrations, optimized containerization, built web pages and REST APIs."
        }
      ]
    },
    {
      company: "Cardinal Health",
      positions: [
        {
          title: "Associate Software Engineer",
          timeline: "Jun 2019 - May 2021",
          desc: "Deployed NodeJS/React systems on k8s, launched the Admin Console MVP, served as technical interviewer for campus recruitment drives. Automated on-call systems to reduce resolution times from > 30 mins to <1 min."
        },
        {
          title: "Software Engineering Intern",
          timeline: "Jan 2019 - Jun 2019",
          desc: "Built Serverless Framework microservices and a shared library of reusable modules."
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
    { title: "Typescript", icon: "mdi-language-typescript" },
    { title: "Javascript", icon: "mdi-language-javascript" },
    { title: "Python", icon: "mdi-language-python" },
    { title: "Shellscript", icon: "mdi-powershell" }
  ],
  frontend: ["Vue", "React", "Vite", "SSR", "Playwright", "PWA"],
  backend: [
    "NodeJS",
    "Bun",
    "Hono",
    "ORPC",
    "Express",
    "NestJS",
    "WebSockets",
    "Postgres",
    "Neo4j",
    "NATS",
    "Redis",
    "Airflow",
    "Pyspark"
  ],
  devops: ["AWS", "GCP", "CICD", "Docker", "k8s", "HELM", "Terraform", "GitHub Actions"],
  ai: ["RAG", "pgvector", "Embeddings", "Evals", "Agentic AI", "MCP", "Mastra AI", "AI Workflows"]
};

// Projects
export const projects = [
  {
    name: "3rdAI",
    description:
      "Semantic lyric based AI search & research platform for song discovery and cross language playlist generation over millions of songs, 129-language corpus."
  },
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
      "Privacy-first, open-source PWA for tracking and analyzing personal expenses. No accounts, no backend; all data stays on device. E2EE encrypted.",
    links: [
      { icon: "mdi-github", url: "https://github.com/gammaSpeck/expense-tracker" },
      { icon: "mdi-web", url: "https://extrack.madhukm.com" },
      {
        icon: "mdi-post-outline",
        url: "https://forum.fossunited.org/t/introducing-extrack-simple-private-expense-tracking/7576"
      }
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
  }
];

// Theme settings
export const themeSettings = {
  primaryColor: "#1867C0", // Default Vuetify primary color
  backgroundColor: "#fff",
  textColor: "#000",
  accentColor: "#1867C0"
};
