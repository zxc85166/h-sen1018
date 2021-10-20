<script setup>
import { defineProps, ref } from "vue";
import Button from "./forms/Button.vue";

const props = defineProps({
  links: { type: Array, required: true },
});
</script>

<template>
  <div class="fixed left-0 right-0 top-0 h-16">
    <nav class="md:flex items-center container mx-auto justify-between">
      <router-link to="/"
        ><img src="@/assets/images/logo.jpg" class="w-20"
      /></router-link>
      <div>
        <ul class="flex items-center space-x-14 text-sm pt-10">
          <li v-for="link in props.links" :key="link.id">
            <router-link
              :to="link.path"
              class="font-bold hover:text-yellow-400 md:block"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex items-center">
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
