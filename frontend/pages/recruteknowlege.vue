<template>
  <div class="d-flex">
    <BasicSheet class="w-25 mr-3">
      <v-list density="compact">
        <v-list-subheader>部署</v-list-subheader>

        <v-list-item
          v-for="(department, i) in departments"
          :key="i"
          :value="department"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="department.icon"></v-icon>
          </template>

          <v-list-item-title v-text="department.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </BasicSheet>
    <BasicSheet class="w-75">
      <BasicButton
        class="mb-3"
        label="保存"
        preicon="mdi-content-save"
      ></BasicButton>
      <v-textarea
        class="mb-3"
        label="採用における必須事項"
        variant="outlined"
        bg-color="white"
        hide-details
        auto-grow
      ></v-textarea>
      <v-textarea
        label="ナレッジ"
        variant="outlined"
        bg-color="white"
        hide-details
        auto-grow
      ></v-textarea>
    </BasicSheet>
  </div>
</template>

<script setup lang="ts">
const departments = [
  { id: 1, name: "サプリ販促事業部", icon: "mdi-delete" },
  { id: 2, name: "コスメ販促事業部", icon: "mdi-delete" },
  { id: 3, name: "ヨコテン事業部", icon: "mdi-delete" },
  { id: 4, name: "制作事業部", icon: "mdi-delete" },
  { id: 5, name: "システム開発部", icon: "mdi-delete" },
];
</script>
