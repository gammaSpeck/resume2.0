<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div
      class="text-h5 font-weight-bold text-uppercase border-b-lg border-opacity-100"
    >
      EDUCATION
    </div>

    <div class="d-flex flex-column justify-start ga-1">
      <EduSegment :key="education[0].degree" v-bind="education[0]" />
      <v-divider />

      <EduSegment :key="education[1].degree" v-bind="education[1]" />
      <v-divider />

      <EduSegment :key="education[2].degree" v-bind="education[2]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EduSegment from "./EduSegment.vue";

const education = [
  {
    degree: "Bachelors in CS Engineering",
    grade: "CGPA 7.3/10",
    school: "CMRIT",
    from: "2015",
    to: "2019",
  },
  {
    degree: "PUC - PCMB",
    grade: "84%",
    school: "Christ Junior College",
    from: "2013",
    to: "2015",
  },
  {
    degree: "Secondary Education",
    grade: "92%",
    school: "St Thomas Public School",
    from: "",
    to: "2013",
  },
];
</script>
