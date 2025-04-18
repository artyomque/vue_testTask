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
@import "./index.scss";
</style>
