<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      EXPERIENCE
    </div>

    <div class="d-flex flex-column justify-start ga-5">
      <div class="d-flex flex-column">
        <div class="text-h6 font-weight-medium">Ollion</div>

        <div class="d-flex flex-column ga-2">
          <ExpCard
            v-for="exp in exps"
            :key="exp.id"
            :exp="exp"
            :title="exp.title"
            :timeline="exp.timeline"
            :desc="exp.desc"
          />
        </div>

        <!-- <v-timeline side="end" align="start" class="custom-timeline">
          <v-timeline-item
            v-for="exp in exps"
            :key="exp.id"
            dot-color="primary"
            density="compact"
            size="small"
            class="custom-timeline-item"
          >
            <ExpCard
              :exp="exp"
              :title="exp.title"
              :timeline="exp.timeline"
              :desc="exp.desc"
            />
          </v-timeline-item>
        </v-timeline> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpCard from "./ExpCard.vue";

const exps = [
  {
    id: 1,
    title: "Lead Product Developer",
    timeline: "Apr 2023 - Present",
    desc: "Orchestrated the end-to-end management of code and infrastructure for all front-end microservices, adeptly led a team of two skilled front-end developers, and represented the product at international tech events to drive market visibility and engagement.",
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
</script>

<style lang="scss" scoped>
.custom-timeline {
  row-gap: 10px !important;
}
</style>
