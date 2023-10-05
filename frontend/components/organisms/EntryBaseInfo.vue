<template>
  <BasicSheet class="entry-card entry-base-info">
    <div class="title">Infos</div>
    <div>
      <div>エントリーID</div>
      <div>{{ entry.id }}</div>
    </div>
    <div>
      <div>氏名</div>
      <div>{{ entry.full_name }}</div>
    </div>
    <div>
      <div>ステータス</div>
      <div>{{ entry.phase_name }}:{{ entry.status_name }}</div>
    </div>
    <div>
      <div>メール</div>
      <div>{{ entry.mail }}</div>
    </div>
    <div>
      <div>郵便番号</div>
      <div>{{ entry.post_code }}</div>
    </div>
    <div>
      <div>住所</div>
      <div>{{ entry.address }}</div>
    </div>
    <div>
      <div>電話番号</div>
      <div>{{ entry.phone }}</div>
    </div>
    <div>
      <div>希望部署</div>
      <div>{{ entry.positions_name }}</div>
    </div>
    <div>
      <div>最終希望部署</div>
      <div>{{ entry.final_positon }}</div>
    </div>
    <div>
      <div>希望拠点</div>
      <div>{{ entry.office }}</div>
    </div>
    <div>
      <div>想定入社日</div>
      <div>{{ entry.join_day }}</div>
    </div>
    <div>
      <div>情報源</div>
      <div>{{ entry.source }}</div>
    </div>
    <div>
      <div>フリーメッセージ</div>
      <div>{{ entry.free_message }}</div>
    </div>
  </BasicSheet>
</template>

<script setup lang="ts">
import { Entry } from "~/types/entry";
import { useEntryStore } from "../../stores/useEntryStore";

const entryStore = useEntryStore();

const entry: Entry = {
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
};
</script>

<style>
.entry-card > .title {
  font-size: 1.45rem;
  padding: 0px 0px 4px 8px;
  margin: 0px 0px 8px -8px;
  background-color: #f6f9fb;
  color: #2d9df0;
}
.entry-card > div {
  display: flex;
  align-items: center;
}
.entry-card > div > div:first-child {
  width: 25%;
  padding: 8px 0px;
  /* font-weight: 500; */
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}
.entry-base-info > div > div {
  width: 75%;
  padding: 4px 0px;
}
</style>
