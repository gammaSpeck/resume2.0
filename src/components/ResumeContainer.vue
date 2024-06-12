<template>
  <v-container class="container">
    <v-row>
      <v-col :cols="topColSpan" :order="topColOrders.info">
        <AboutSection />
      </v-col>

      <v-col
        :order="topColOrders.image"
        align-self="center"
        class="d-flex align-center justify-center"
      >
        <v-avatar size="125">
          <v-img alt="Madhu KM" src="@/assets/avatar3.jpeg"></v-img>
        </v-avatar>
      </v-col>
    </v-row>

    <!-- ********** -->

    <v-row>
      <v-col :cols="leftSectionColSpan" class="d-flex flex-column ga-4">
        <ExperienceSection />
        <LanguagesSection />
      </v-col>

      <v-col class="d-flex flex-column ga-4">
        <SkillsSection />
        <EducationSection />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useDisplay } from "vuetify";

import ExperienceSection from "./ExperienceSection.vue";
import LanguagesSection from "./LanguagesSection.vue";
import SkillsSection from "./SkillsSection.vue";
import EducationSection from "./EducationSection.vue";
import AboutSection from "./AboutSection.vue";

const { mobile } = useDisplay({ mobileBreakpoint: 600 });

const topColOrders = ref({ image: 2, info: 1 });

const DEFAULT_BOTTOM_COL_SPAN = 7;
const DEFAULT_TOP_COL_SPAN = 8;

const leftSectionColSpan = ref(DEFAULT_BOTTOM_COL_SPAN);
const topColSpan = ref(DEFAULT_TOP_COL_SPAN);

function syncScreenSizeDimensions(isMobile: boolean) {
  topColOrders.value = isMobile ? { image: 1, info: 2 } : { image: 2, info: 1 };
  leftSectionColSpan.value = isMobile ? 12 : DEFAULT_BOTTOM_COL_SPAN;
  topColSpan.value = isMobile ? 12 : DEFAULT_TOP_COL_SPAN;
}

// Done to ensure in Responsive mode, the image comes on TOP
watch(mobile, syncScreenSizeDimensions);
onMounted(() => syncScreenSizeDimensions(mobile.value));
</script>

<style scoped lang="scss">
.container {
  background-color: #fff;
  max-width: 960px;
  min-height: 1123px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border-style: solid;
  border-width: 0.8px;

  padding: 2rem;

  @media (max-width: 600px) {
    // Breakpoint for sm and below
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    // Breakpoint for xs and below
    padding: 1rem;
  }
}

// .min-width-20-rem {
//   min-width: 20rem !important;
// }

/* Print styles */
// @media print {
//   @page {
//     size: A4;
//     margin: 0;
//   }

//   body {
//     margin: 0;
//   }

//   .resume-container {
//     width: 100%;
//     height: auto;
//     margin: 0;
//     padding: 0;
//     box-shadow: none;
//   }

//   /* Additional styles to ensure correct printing */
//   /* Example: Remove backgrounds that won't print correctly */
//   .resume-container img {
//     max-width: 100%;
//     height: auto;
//   }
// }
</style>
