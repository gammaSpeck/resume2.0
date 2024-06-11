<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      EXPERIENCE
    </div>

    <div class="d-flex flex-column justify-start ga-2">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="text-h6 font-weight-medium text-primary">Ollion</div>
          <div class="text-body-2 d-inline-flex gc-1">
            Worked extensively on DataPipes which is a cloud native Data
            Management Platform.
          </div>
        </div>

        <div class="d-flex flex-column ga-2">
          <ExpCard
            v-for="exp in ollionExps"
            :key="exp.title"
            :exp="exp"
            :title="exp.title"
            :timeline="exp.timeline"
            :desc="exp.desc"
          />
        </div>
      </div>

      <v-divider />

      <div class="d-flex flex-column ga-1">
        <div class="d-flex flex-column">
          <div class="text-h6 font-weight-medium text-primary">
            Cardinal Health
          </div>
          <div class="text-body-2">
            Healthcare providers in the US use our software to communicate
            digitally with patients about their health.
          </div>
        </div>

        <div class="d-flex flex-column ga-2">
          <ExpCard
            v-for="exp in cardinalExps"
            :key="exp.title"
            :exp="exp"
            :title="exp.title"
            :timeline="exp.timeline"
            :desc="exp.desc"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpCard from "./ExpCard.vue";

const ollionExps = [
  {
    id: 1,
    title: "Lead Product Developer",
    timeline: "Apr 2023 - Present",
    desc: "Orchestrated the end-to-end management of code and infrastructure for all front-end microservices, led a team of two skilled developers, completed the entire project migration from Vue 2 to Vue 3, and represented the product at international tech events to drive market visibility and engagement.",
  },
  {
    id: 2,
    title: "Senior Developer",
    timeline: "Apr 2022 - Apr 2023",
    desc: "Owned multiple critical components, executed a comprehensive migration from Webpack to Vite, and collaborated closely with UX teams to enhance user experience and streamline front-end performance.",
  },
  {
    id: 3,
    title: "Developer",
    timeline: "May 2021 - Apr 2022",
    desc: "Contributed to the migration from JavaScript to TypeScript, optimized containerization processes, developed multiple web pages, and authored numerous REST APIs for the backend.",
  },
];

const cardinalExps = [
  {
    title: "Associate Software Engineer",
    timeline: "Jun 2019 - May 2021",
    desc: "Built architectural frameworks in NodeJS and React.js, architected and deployed a project to Kubernetes while mentoring the team through the SDLC, designed and launched the MVP for an Admin Console used by clients and support teams, owned multiple components, and served as a technical interviewer for campus recruitment.",
  },
  {
    title: "Software Engineering Intern",
    timeline: "Jan 2019 - Jun 2021",
    desc: "Developed microservices using the Serverless Framework and created a shared repository of reusable modules.",
  },
];
</script>

<style lang="scss" scoped>
.custom-timeline {
  row-gap: 10px !important;
}
</style>
