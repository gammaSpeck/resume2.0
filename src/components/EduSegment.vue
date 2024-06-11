<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between align-center">
      <div class="text-h6 font-weight-medium text-primary">
        {{ degree }}
      </div>
      <div class="text-caption font-weight-medium">{{ grade }}</div>
    </div>

    <div class="text-body-2 font-weight-bold">{{ school }}</div>
    <div class="text-caption font-weight-light">
      <v-icon
        size="small"
        icon="mdi-calendar-range"
        class="text-primary"
      ></v-icon>

      {{ from ? `${from} -` : "" }} {{ to }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  degree: string;
  grade: string;
  school: string;
  from: string;
  to: string;
}

defineProps<IProps>();
</script>
