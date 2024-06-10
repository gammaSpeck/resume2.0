<template>
  <div class="d-inline-flex flex-column">
    <div class="text-body-1 font-weight-medium">{{ title }}</div>
    <div class="text-caption font-weight-light">
      <v-icon
        size="small"
        icon="mdi-calendar-range"
        class="text-primary"
      ></v-icon>

      {{ timeline }}
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
