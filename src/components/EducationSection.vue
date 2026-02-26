<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div class="text-h6 font-weight-bold text-uppercase border-b-lg border-opacity-100">
      EDUCATION
    </div>

    <div class="d-flex flex-column justify-start ga-1">
      <template v-for="edu in education" :key="edu.degree">
        <EduSegment v-bind="edu" />
        <!-- <v-divider v-if="index < education.length - 1" /> -->
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import EduSegment from "./EduSegment.vue";
import { education } from "../config/resumeConfig";
</script>
