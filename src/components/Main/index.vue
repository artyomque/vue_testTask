<script lang="ts" setup>
import FilesPanel from "@/components/Main/FilesPanel/index.vue";
import ChatPanel from "@/components/Main/ChatPanel/index.vue";
</script>

<template>
  <div class="container">
    <div class="grid">
      <FilesPanel />
      <ChatPanel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.grid {
  display: grid;
  grid-template-columns: 24.6% 1fr;
  column-gap: 30px;
  margin-bottom: 60px;

  @include sm-lg() {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-bottom: 0;
  }

  @include mobile() {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-bottom: 0;
  }
}
</style>
