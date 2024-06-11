<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      SKILLS
    </div>

    <div class="d-flex flex-column justify-start ga-1">
      <SkillCard heading="Coding languages" :skills="codingLanguages" />
      <SkillCard heading="Frontend" :skills="frontend" />
      <SkillCard heading="Backend" :skills="backend" />
      <SkillCard heading="Devops" :skills="devops" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from "./SkillCard.vue";

const codingLanguages = [
  { title: "Javascript", icon: "mdi-language-javascript" },
  { title: "Typescript", icon: "mdi-language-typescript" },
  { title: "Python", icon: "mdi-language-python" },
  { title: "Shell", icon: "mdi-powershell" },
];

const frontend = [
  "Vue",
  "Vite",
  "React",
  "NextJS",
  "Nuxt",
  "MUI",
  "Cypress",
  "Playwright",
  "Web Components",
];

const backend = [
  "NodeJS",
  "Express",
  "NestJS",
  "FastAPI",
  "OpenAPI Spec",
  "WebSockets",
  "Serverless",
  "RDBMS",
  "Neo4j",
  "MongoDB",
  "NATS",
];

const devops = ["AWS", "CICD", "Docker", "Kubernetes", "HELM", "Jenkins"];
</script>
