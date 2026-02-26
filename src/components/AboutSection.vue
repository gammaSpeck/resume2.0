<template>
  <div>
    <div class="d-flex-inline mb-1">
      <div class="text-h4 font-weight-bold">{{ fullName }}</div>
      <div class="text-h6 font-weight-bold text-primary">
        {{ personalInfo.title }}
      </div>
      <div class="text-body-2">
        {{ personalInfo.summary }}
      </div>
    </div>

    <div class="d-flex flex-wrap gc-4">
      <LinkElement
        v-for="elm in contactInfo"
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
import { personalInfo, contactInfo } from "../config/resumeConfig";
import { computed } from "vue";

const fullName = computed(() => `${personalInfo.firstName} ${personalInfo.lastName}`);
</script>
