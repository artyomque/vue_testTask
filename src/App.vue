<script setup>
import { ref, provide } from "vue";
import Header from "@/components/Header/index.vue";
import Main from "@/components/Main/index.vue";
import Footer from "@/components/Footer/index.vue";

const navIsOpen = ref(false);

const openNav = () => {
  navIsOpen.value = true;
  document.body.classList.add("disableScroll");
};

const closeNav = () => {
  navIsOpen.value = false;
  document.body.classList.remove("disableScroll");
};

provide("nav", { navIsOpen, openNav, closeNav });
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss" scoped></style>
