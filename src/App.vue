<template>
  <v-app>
    <v-main class="main-container">
      <v-fab
        v-if="!isPdfGen"
        color="primary"
        icon="mdi-download"
        class="download-fab"
        @click="downloadResume"
      ></v-fab>
      <ResumeContainer />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ResumeContainer from "./components/ResumeContainer.vue";
import { personalInfo } from "./config/resumeConfig";

const isPdfGen = import.meta.env.VITE_PDF_GEN === "true";
function downloadResume() {
  const link = document.createElement("a");
  link.href = `/${personalInfo.pdfFilename}`;
  link.download = personalInfo.pdfFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<style scoped lang="scss">
.main-container {
  background-color: lightgrey;
}
.download-fab {
  position: fixed;
  top: 2rem; /* Adjust this value to control the distance from the top */
  right: 4rem; /* Adjust this value to control the distance from the right */
  z-index: 1000; /* Ensures it stays above other elements */
}
</style>
