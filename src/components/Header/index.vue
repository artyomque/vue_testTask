<script setup lang="ts">
import Logo from "@/components/Logo/index.vue";
import HeaderInfoRow from "@/components/Header/HeaderInfoRow/index.vue";
import HeaderButton from "@/components/Header/HeaderButton/index.vue";
</script>

<template>
  <div class="container">
    <header class="header">
      <Logo :type="`header`" />
      <nav class="header__nav">
        <div class="header__info">
          <HeaderInfoRow :icon="'/icons/rate.svg'" :text="'5%'" type="rate" />
          <HeaderInfoRow :icon="'/icons/user.svg'" :text="'Username@adaurum.ru'" type="user" />
        </div>
        <div class="header__actions">
          <HeaderButton :icon="'/icons/settings.svg'" />
          <HeaderButton :icon="'/icons/login.svg'" />
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.header {
  display: flex;
  justify-content: space-between;
  margin: 33px 0;

  @include mobile() {
    flex-direction: column;
    gap: 20px;
  }

  &__nav {
    display: flex;
    gap: 26px;

    @include mobile() {
      justify-content: space-between;
    }
  }

  &__actions {
    display: flex;
    gap: 26px;
  }

  &__info {
    display: flex;
    gap: 20px;

    @include mobile() {
      flex-direction: column-reverse;
      gap: 4px;
    }
  }
}
</style>
