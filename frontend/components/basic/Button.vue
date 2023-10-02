<template>
  <v-btn v-bind="$attrs" rounded="xl" variant="tonal" color="success">
    <template #prepend>
      <v-icon color="success" :icon="preicon"></v-icon>
    </template>
    <span>{{ label }}</span>
  </v-btn>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps(["label", "preicon"]);
</script>
