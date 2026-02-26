<template>
  <div class="d-flex flex-column ga-2 w-100">
    <div class="text-h6 font-weight-bold text-uppercase border-b-lg border-opacity-100">
      PROJECTS
    </div>

    <div class="d-flex flex-column ga-2">
      <div v-for="(project, index) in projects" :key="index" class="d-flex flex-column ga-1">
        <div class="d-flex justify-space-between align-center">
          <div class="text-subtitle1 font-weight-bold text-primary">
            {{ project.name }}
          </div>

          <div class="d-flex ga-2" v-if="project.links && project.links.length > 0">
            <a
              v-for="(link, linkIndex) in project.links"
              :key="linkIndex"
              :href="link.url"
              target="_blank"
              class="text-primary"
            >
              <v-icon size="x-small" :icon="link.icon"></v-icon>
            </a>
          </div>
        </div>

        <div class="text-body-2">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from "../config/resumeConfig";
</script>
