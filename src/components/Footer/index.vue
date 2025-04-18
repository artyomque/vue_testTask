<script lang="ts" setup>
import { ref } from "vue";
import Logo from "@/components/Logo/index.vue";
</script>

<template>
  <footer class="footer">
    <div class="container container--footer">
      <div class="footer__left">
        <Logo :type="`footer`" />
        <a class="footer__nav-link" href="#">Политика конфиденциальности</a>
      </div>
      <nav class="footer__nav">
        <a class="footer__nav-link nav-link_mail" href="mailto:#"
          ><img src="/icons/mail.svg" />pinkchicken@adaurum.ru</a
        >
        <div class="footer__lang-selector">
          <img src="/icons/globe.svg" />
          <a class="footer__nav-link" href="#">RU</a>
          <a class="footer__nav-link" href="#">EN</a>
          <a class="footer__nav-link" href="#">TUR</a>
        </div>
        <div class="footer__messengers">
          <a class="footer__nav-link" href="#"><img src="/icons/Telegram.svg" /></a>
          <a class="footer__nav-link" href="#"><img src="/icons/Whatsapp.svg" /></a>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/base/vars";

.container--footer {
  display: flex;
  justify-content: space-between;

  @include sm-lg() {
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 0 20px;
  }

  @include mobile() {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.footer {
  background-color: $footer;
  padding: 32px 0;

  @include mobile() {
    padding: 40px 0;
    background-color: $background-mobile;
  }

  &__left {
    display: flex;
    gap: 106px;
    align-items: center;

    @include mobile() {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 65px;

    @include sm-lg() {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    @include mobile() {
      flex-direction: column-reverse;
      gap: 20px;
      align-items: flex-start;
    }
    &-link {
      color: $font-secondary;
      font-size: 15px;
      font-weight: 500;
    }
  }

  &__lang-selector {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__messengers {
    display: flex;
    gap: 12px;
  }
}

.nav-link_mail {
  display: flex;
  gap: 12px;
}
</style>
