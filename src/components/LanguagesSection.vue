<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      LANGUAGES
    </div>

    <div class="d-flex flex-wrap gc-4 text-body-2">
      <div class="d-flex gc-2" v-for="lang in languages">
        <div class="font-weight-bold">{{ lang.name }}</div>
        - {{ lang.proficiency }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const languages = [
  {
    name: "English",
    proficiency: "Advanced",
  },
  {
    name: "Hindi",
    proficiency: "Proficient",
  },
  {
    name: "Tamil",
    proficiency: "Intermediate",
  },
  {
    name: "Malayalam",
    proficiency: "Intermediate",
  },
];
</script>
