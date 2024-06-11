<template>
  <div class="d-flex flex-column">
    <div class="text-h6 font-weight-medium text-primary">{{ heading }}</div>
    <v-chip-group variant="tonal" column>
      <v-chip
        :key="title"
        size="small"
        v-for="{ title, icon } in computedSkills"
        :prepend-icon="icon"
      >
        {{ title }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type SkillItem = { title: string; icon: string } | string;

interface IProps {
  heading: string;
  skills: SkillItem[];
}

const props = defineProps<IProps>();

const computedSkills = computed<{ title: string; icon?: string }[]>(() =>
  props.skills.map((skill) => {
    if (typeof skill === "string") return { title: skill, icon: undefined };
    return skill;
  })
);
</script>
