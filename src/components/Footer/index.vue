<script lang="ts" setup>
import { ref } from "vue";
import Logo from "@/components/Logo/index.vue";
</script>

<template>
  <footer class="footer">
    <div class="container container--footer">
      <Logo :type="`footer`" />
      <nav class="footer__nav">
        <a class="footer__nav-link" href="#">Политика конфиденциальности</a>
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

.footer {
  background-color: $footer;
  padding: 32px 0;

  &__nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 65px;
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
