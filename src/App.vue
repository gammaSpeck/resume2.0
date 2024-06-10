<template>
  <v-app>
    <v-main class="bg-background">
      <ResumeContainer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ResumeContainer from "./components/ResumeContainer.vue";
</script>

<style lang="scss">
.custom-timeline-item {
  & > .v-timeline-item__body {
    padding: 0 0 0 5px !important;
  }
}
</style>
