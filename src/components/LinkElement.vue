<template>
  <div>
    <a v-if="link" :href="link" target="_blank">
      <div class="d-inline-flex gc-1 align-center justify-start text-primary">
        <v-icon size="x-small" :icon="icon" class=""></v-icon>
        <div class="text-caption">{{ title }}</div>
      </div>
    </a>

    <div v-else class="d-inline-flex gc-1 align-center justify-start">
      <v-icon size="x-small" :icon="icon" class="text-primary"></v-icon>
      <div class="text-caption">{{ title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  icon: string;
  link?: string;
}

defineProps<IProps>();
</script>
