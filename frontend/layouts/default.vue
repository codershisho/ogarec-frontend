<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, url] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
          :to="url"
          color="primary"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="tw-bg-gray-200">
      <v-container class="!tw-px-24 !tw-pt-12">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const links = [
  ["mdi-send", "ダッシュボード", "/dashboard"],
  ["mdi-inbox-arrow-down", "エントリー一覧", "/entries"],
  ["mdi-delete", "採用ナレッジ", "/recruteknowlege"],
];

const drawer = ref(null);
</script>
