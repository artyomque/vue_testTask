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
@import "./index.scss";
</style>
