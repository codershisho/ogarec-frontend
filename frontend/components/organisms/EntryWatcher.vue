<template>
  <BasicSheet class="entry-card entry-watcher">
    <div class="title">Watchers</div>
    <div>
      <v-list class="w-100">
        <v-list-item v-for="(watcher, i) in watchers" :key="i">
          <v-checkbox
            :label="watcher.user_Name"
            hide-details
            density="compact"
            color="primary"
          ></v-checkbox>
        </v-list-item>
      </v-list>
    </div>
  </BasicSheet>
</template>

<script setup lang="ts">
import { EntryWatcher } from "~/types/entry";

const watchers = Array<EntryWatcher>();
watchers.push({
  id: 1,
  phase_id: 1,
  user_id: 1,
  user_Name: "AAAA",
});
watchers.push({
  id: 2,
  phase_id: 1,
  user_id: 2,
  user_Name: "BBBB",
});
</script>
