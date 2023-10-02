<template>
  <BasicSheetFlex>
    <div class="tw-w-2/6">
      <BasicText
        placeholder="応募者検索"
        preicon="mdi-magnify"
        v-model="search"
      ></BasicText>
    </div>
    <div class="tw-w-1/6">
      <BasicButton
        label="新規エントリー"
        preicon="mdi-check-circle"
      ></BasicButton>
    </div>
  </BasicSheetFlex>

  <BasicSheet class="mt-3">
    <v-data-table
      :headers="headers"
      :items="entries"
      :search="search"
      density="compact"
    ></v-data-table>
  </BasicSheet>
</template>

<script setup lang="ts">
const search = ref(null);
const headers = [
  { title: "エントリーID", key: "id" },
  { title: "氏名", key: "first_name" },
  { title: "希望部署", key: "positions" },
  { title: "選考フェーズ", key: "phase" },
  { title: "ステータス", key: "status" },
];
const entries = [
  {
    id: 1,
    first_name: "田中",
    last_name: "AAA",
    positions: "制作,シス",
    phase: "一次面接",
    status: "実施前",
  },
];
</script>
