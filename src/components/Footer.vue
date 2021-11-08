<script setup>
import { defineProps } from "vue";

const props = defineProps({});
</script>

<template>
  <footer class="bg-footer-img bg-cover pt-5">
    <div class="text-white grid place-content-center">
      <div class="grid grid-cols-1 gap-5">
        <div class="grid place-content-center">
          <img src="@/assets/images/logo.png" class="w-[277px]" />
        </div>
        <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-3 text-center">
          <div>
            <i class="fas fa-phone-alt"></i>
            07-5507639
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            abc123@gmail.com
          </div>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            高雄市美濃區中興路二段45號
          </div>
        </div>
        <div class="divide-y-2 divide-white text-center">
          <ul class="text-center pb-5">
            <a href="#">
              <i
                class="fab fa-facebook mr-1 w-20 text-4xl hover:text-blue-600"
              ></i>
            </a>
            <a href="#">
              <i
                class="fab fa-line mr-1 w-20 text-4xl hover:text-green-600"
              ></i>
            </a>
            <a href="#">
              <i
                class="
                  fab
                  fa-instagram
                  mr-1
                  w-20
                  text-4xl
                  hover:text-purple-700
                "
              ></i>
            </a>
          </ul>
          <div class="py-3 text-right mt-1 right-0">
            COPYRIGHT 人晨國際 2020 All right Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.bg-footer-img {
  background-image: url("@/assets/images/footer.png");
}
</style>
