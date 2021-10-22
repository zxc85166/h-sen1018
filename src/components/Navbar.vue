<script setup>
import { defineProps, ref } from "vue";
import Button from "./forms/Button.vue";

const props = defineProps({
  links: { type: Array, required: true },
});
</script>

<template>
  <div class="absolute max-w-6xl mx-auto px-4 justify-center">
    <nav class="md:flex items-center">
      <div>
        <router-link to="/"
          ><img src="@/assets/images/logo.jpg" class="w-20"
        /></router-link>
      </div>
      <div>
        <ul class="flex items-center space-x-14 text-sm pt-10">
          <li v-for="link in props.links" :key="link.id">
            <router-link
              :to="link.path"
              class="font-extrabold hover:text-yellow-400 md:block"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="fixed flex items-center top-5 right-0 md:top-0">
        <Button text="登入/註冊" />
        <Button text="會員中心" />
      </div>
    </nav>
  </div>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #f1d065;
}
</style>
