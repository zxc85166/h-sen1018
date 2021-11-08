<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
const links = [
  { id: 1, name: "關於人晨", path: "/about" },
  { id: 2, name: "教育課程", path: "/education" },
  { id: 3, name: "商品資訊", path: "/information" },
  { id: 4, name: "場地租借", path: "/rent" },
  { id: 5, name: "合作店家", path: "/Cooperative" },
  { id: 6, name: "聯絡我們", path: "/contact" },
];
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <!-- Gotop -->
  <div class="fixed right-5 bottom-20 z-50 drop-shadow-lg">
    <div
      class="
        h-11
        w-11
        text-white
        cursor-pointer
        flex
        items-center
        justify-center
        bg-yellow-400
        rounded-lg
        text-2xl
        font-bold
      "
      @click="scrollToTop"
    >
      ︿
    </div>
  </div>
  <div class="min-w-full">
    <Navbar :links="links" />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss"></style>
