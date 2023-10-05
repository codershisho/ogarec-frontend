<template>
  <BasicSheet class="entry-card entry-file">
    <div class="title">Documents</div>
    <div>
      <div>履歴書</div>
      <div>
        <v-file-input
          label="upload"
          density="compact"
          hide-details
        ></v-file-input>
        <v-btn
          class="ml-2"
          icon="mdi-arrow-top-right-bold-box-outline"
          size="x-small"
          color="primary"
        ></v-btn>
      </div>
    </div>
    <div>
      <div>職務経歴書</div>
      <div>
        <v-file-input
          label="upload"
          density="compact"
          hide-details
        ></v-file-input>
        <v-btn
          class="ml-2"
          icon="mdi-arrow-top-right-bold-box-outline"
          size="x-small"
          color="primary"
        ></v-btn>
      </div>
    </div>
    <div>
      <div>適性検査</div>
      <div>
        <v-file-input
          label="upload"
          density="compact"
          hide-details
        ></v-file-input>
        <v-btn
          class="ml-2"
          icon="mdi-arrow-top-right-bold-box-outline"
          size="x-small"
          color="primary"
        ></v-btn>
      </div>
    </div>
    <div>
      <div>その他</div>
      <div>
        <v-file-input
          label="upload"
          density="compact"
          hide-details
        ></v-file-input>
        <v-btn
          class="ml-2"
          icon="mdi-arrow-top-right-bold-box-outline"
          size="x-small"
          color="primary"
        ></v-btn>
      </div>
    </div>
  </BasicSheet>
</template>

<script setup lang="ts"></script>
<style scoped>
.entry-file > div {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}
.entry-file > div > div:first-child {
  width: 15%;
  padding: 4px 0px;
  font-weight: 500;
}
.entry-file > div > div {
  display: flex;
  align-items: center;
  width: 75%;
  padding: 4px 0px;
}
</style>
