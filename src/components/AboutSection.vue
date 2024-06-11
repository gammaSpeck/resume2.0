<template>
  <div>
    <div class="d-flex-inline mb-1">
      <div class="text-h4 font-weight-bold">Madhusoodhanan KM</div>
      <div class="text-h5 font-weight-bold text-primary">
        Full Stack Developer
      </div>
      <div class="text-body-2">
        Tech aficionado embracing the full-stack frenzy of
        {{ new Date().getFullYear() }}—conceptualizing, R&D, coding, testing,
        and cloud deployment. A one-person IT army, reveling in the end-to-end
        adventure.
      </div>
    </div>

    <div class="d-flex flex-wrap gc-4">
      <LinkElement
        v-for="elm in linkElements"
        :key="elm.icon"
        :icon="elm.icon"
        :title="elm.title"
        :link="elm.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkElement from "./LinkElement.vue";

const linkElements = [
  { icon: "mdi-phone", title: "+91-9738575801", link: "tel:+919738575801" },
  {
    icon: "mdi-github",
    title: "gammaSpeck",
    link: "https://github.com/gammaSpeck",
  },
  {
    icon: "mdi-linkedin",
    title: "madhusoodhanan-km",
    link: "https://www.linkedin.com/in/madhusoodhanan-km",
  },
  {
    icon: "mdi-email",
    title: "tech@madhukm.com",
    link: "mailto:tech@madhukm.com",
  },
  { icon: "mdi-home", title: "Bengaluru, Karnataka, India" },
];
</script>
