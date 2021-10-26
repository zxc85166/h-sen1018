<script setup>
import { defineProps, ref } from "vue";
import Button from "./login/Button.vue";

const props = defineProps({
  links: { type: Array, required: true },
});
</script>

<template>
  <div class="absolute w-full px-4">
    <nav class="relative md:flex items-stretch justify-center">
      <!-- logo  -->
      <div class="mx-auto md:grid place-content-center">
        <router-link to="/">
          <img src="@/assets/images/logo.jpg" class="w-10 md:w-20" />
        </router-link>
      </div>
      <!-- router-link -->
      <div class="mx-auto">
        <ul
          class="
            flex
            items-center
            space-x-12
            md:space-x-14
            text-sm
            pt-5
            md:pt-10
          "
        >
          <li v-for="link in props.links" :key="link.id">
            <router-link
              :to="link.path"
              class="font-extrabold hover:text-yellow-400 md:block pb-3"
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </div>

      <!-- 登入與搜尋 -->
      <div class="gird">
        <div
          class="
            flex
            items-center
            absolute
            md:relative
            top-0
            md:right-0
            right-[-12%]
          "
        >
          <i
            class="
              fas
              fa-sign-in-alt
              text-xl
              mr-2
              text-green-600
              pt-1
              hover:text-green-700
            "
          ></i>
          <Button text="登入/註冊" />
          <i
            class="
              fas
              fa-user-alt
              text-xl
              mr-2
              text-green-600
              pt-1
              hover:text-green-700
            "
          ></i>
          <Button text="會員中心" />
          <a href="#">
            <i
              class="
                fab
                fa-facebook
                mr-1
                w-10
                text-xl text-green-600
                pt-1
                hover:text-blue-600
              "
            ></i>
          </a>
          <a href="#">
            <i
              class="
                fab
                fa-line
                mr-1
                w-10
                text-xl text-green-600
                pt-1
                hover:text-green-700
              "
            ></i>
          </a>
          <a href="#">
            <i
              class="
                fab
                fa-instagram
                mr-1
                w-10
                text-xl text-green-600
                pt-1
                hover:text-purple-700
              "
            ></i>
          </a>
        </div>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div class="md:flex">
            <div class="w-full p-3">
              <div class="relative">
                <i
                  class="
                    absolute
                    fa fa-search
                    text-gray-400
                    top-3
                    left-4
                    hover:cursor-pointer
                  "
                ></i>
                <input
                  type="text"
                  class="
                    bg-white
                    h-10
                    w-full
                    px-12
                    border
                    rounded-lg
                    focus:outline-none
                  "
                  name
                />
                <span
                  class="
                    absolute
                    top-2
                    right-5
                    border-l
                    pl-4
                    hover:cursor-pointer
                  "
                  >搜尋</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss">
.router-link-exact-active {
  color: #f1d065;
  @media (min-width: 576px) {
    border-bottom: 3px solid #efbb28;
  }
}
</style>
