<template>
  <div class="d-flex">
    <div class="d-flex flex-column tw-w-5/6">
      <div class="d-flex">
        <OrganismsEntryBaseInfo class="w-50 mr-3"></OrganismsEntryBaseInfo>
        <OrganismsEntryFinalJudge class="w-50 mr-3"></OrganismsEntryFinalJudge>
      </div>
      <div class="d-flex mt-3">
        <OrganismsEntryFile class="w-50 mr-3"></OrganismsEntryFile>
        <OrganismsEntryDiscussion class="w-50 mr-3"></OrganismsEntryDiscussion>
      </div>
    </div>
    <div class="tw-w-1/6">
      <OrganismsEntryWatcher></OrganismsEntryWatcher>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

// TODO id検索

console.log(id);
</script>

<style>
.entry-card span {
  font-size: large;
}
</style>
