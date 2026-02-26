<template>
  <div class="d-inline-flex flex-column">
    <div class="d-inline-flex flex-row ga-2 align-center justify-space-between">
      <div class="text-body-2 font-weight-bold">{{ title }}</div>
      <div class="text-caption font-weight-light">
        <v-icon size="x-small" icon="mdi-calendar-range" class="text-primary"></v-icon>
        {{ timeline }}
      </div>
    </div>

    <div class="text-body-2">
      {{ desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  timeline: string;
  desc: string;
}

defineProps<IProps>();
</script>

<style scoped></style>
