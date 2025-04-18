<script lang="ts" setup>
type Props = {
  type: "header" | "footer";
};

defineProps<Props>();
</script>

<template>
  <img class="logo" v-if="type === `header`" src="/Logo/Logo_header.svg" />
  <img class="logo" v-if="type === `footer`" src="/Logo/Logo_footer.svg" />
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";
.logo {
  width: 219px;

  @include sm-lg {
    width: 209px;
  }

  @include mobile {
    width: 181px;
  }
}
</style>
