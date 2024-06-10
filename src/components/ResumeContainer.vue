<template>
  <v-container class="container">
    <v-row class="row-20">
      <v-col xs="12" sm="8" md="8" :order="colOrder.info">
        <div class="d-flex-inline mb-1">
          <div class="text-h4 font-weight-bold">Madhusoodhanan KM</div>
          <div class="text-h5 font-weight-bold text-primary">
            Full Stack Developer
          </div>
        </div>

        <div class="d-flex flex-wrap gc-4">
          <LinkElement
            icon="mdi-phone"
            title="+91-9738575801"
            link="tel:+919738575801"
          />
          <LinkElement
            icon="mdi-github"
            title="gammaSpeck"
            link="https://github.com/gammaSpeck"
          />
          <LinkElement
            icon="mdi-linkedin"
            title="madhusoodhanan-km"
            link="https://www.linkedin.com/in/madhusoodhanan-km"
          />
          <LinkElement
            icon="mdi-email"
            title="tech@madhukm.com"
            link="mailto:tech@madhukm.com"
          />
          <LinkElement icon="mdi-home" title="Bengaluru, Karnataka, India" />
        </div>
      </v-col>

      <v-col
        :order="colOrder.image"
        md="4"
        align-self="center"
        class="d-flex align-center justify-center"
      >
        <v-avatar size="150">
          <v-img
            alt="Madhu KM"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
      </v-col>
    </v-row>

    <v-row class="row-80">
      <v-col>
        <!-- Content for the second row (80% height) -->
        Second Row
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LinkElement from "./LinkElement.vue";

import { useDisplay } from "vuetify";

const { xs } = useDisplay();

// Done to ensure in Responsive mode, the image comes on TOP
watch(xs, (isXs) => {
  colOrder.value = isXs ? { image: 1, info: 2 } : { image: 2, info: 1 };
});

const colOrder = ref({
  image: 2,
  info: 1,
});
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  background-color: #fff;
  max-width: 794px;
  min-height: 1123px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border-style: solid;
  border-width: 0.8px;

  padding: 2.5rem;

  @media (max-width: 600px) {
    // Breakpoint for sm and below
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    // Breakpoint for xs and below
    padding: 1rem;
  }
}

.row-20 {
  // TODO: Remove
  // border-style: solid;
  flex: 0 0 20%;
  min-height: 20%;
}

.row-80 {
  flex: 1;
  max-height: 80%;
}

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
