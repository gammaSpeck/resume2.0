<template>
  <v-app>
    <v-main class="main-container">
      <ResumeContainer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ResumeContainer from "./components/ResumeContainer.vue";
</script>

<style scoped lang="scss">
.main-container {
  background-color: lightgrey;
}
</style>
