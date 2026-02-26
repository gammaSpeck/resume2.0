<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div class="text-h6 font-weight-bold text-uppercase border-b-lg border-opacity-100">SKILLS</div>

    <div class="d-flex flex-column justify-start">
      <SkillCard heading="Coding languages" :skills="skills.codingLanguages" />
      <!-- <v-divider /> -->

      <SkillCard heading="Frontend" :skills="skills.frontend" />
      <!-- <v-divider /> -->

      <SkillCard heading="Backend" :skills="skills.backend" />
      <!-- <v-divider /> -->

      <SkillCard heading="Devops" :skills="skills.devops" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from "./SkillCard.vue";
import { skills } from "../config/resumeConfig";
</script>
