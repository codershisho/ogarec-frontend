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
      @click:row="onClick"
    ></v-data-table>
  </BasicSheet>
</template>

<script setup lang="ts">
import { useEntryStore } from "../../stores/useEntryStore";
import { Entry } from "../../types/entry";

const router = useRouter();
const entry = useEntryStore();

const search = ref(null);
const headers = [
  { title: "エントリーID", key: "id" },
  { title: "氏名", key: "full_name" },
  { title: "希望部署", key: "positions" },
  { title: "選考フェーズ", key: "phase_name" },
  { title: "ステータス", key: "status_name" },
];

const entries = Array<Entry>();
entries.push({
  id: 1,
  first_name: "XXX",
  last_name: "YYY",
  full_name: "XXX YYY",
  first_name_kana: "XXX",
  last_name_kana: "YYY",
  phase_id: 1,
  phase_name: "書類選考",
  status_id: 1,
  status_name: "実行前",
  mail: "",
  birth_day: "",
  post_code: "",
  address: "",
  phone: "",
  positions: [1, 2],
  positions_name: ["シス", "制作"],
  final_positon: "",
  office: "",
  join_day: "",
  source: "",
  free_message: "",
  image: "",
});

function onClick(event: any, row: any) {
  entry.setEntry(entries[0]);
  router.push({ path: "/entries/" + row.item.columns.id });
}
</script>
