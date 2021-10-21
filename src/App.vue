<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
const links = [
  { id: 1, name: "關於人晨", path: "/about" },
  { id: 2, name: "教育課程", path: "/Foo" },
  { id: 3, name: "商品資訊", path: "/Foo" },
  { id: 4, name: "場地租借", path: "/Foo" },
  { id: 5, name: "合作店家", path: "/Foo" },
  { id: 6, name: "聯絡我們", path: "/Foo" },
];
</script>

<template>
  <Navbar :links="links" />
  <div class="pt-20">
    <router-view />
  </div>
  <Footer />
</template>

<style lang="scss"></style>
