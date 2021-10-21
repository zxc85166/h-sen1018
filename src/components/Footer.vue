<script setup>
import { defineProps } from "vue";

const props = defineProps({
});
</script>

<template>
    <footer>
        <div class="container text-white flex justify-center items-center">
            <div class="grid grid-cols-1">
                <div class="items-center">
                    <router-link to="/">
                        <img src="@/assets/images/logo.jpg" class="w-20" />
                    </router-link>
                </div>
                <div class="flex">
                    <ul class="mb-2">
                        <li>
                            <img src="logo.jpg" class="icon mr-1" />07-55507639
                        </li>
                        <li>
                            <img src="logo.jpg" class="icon mr-1" />abc123@gmail.com
                        </li>
                        <li>
                            <img src="logo.jpg" class="icon mr-1" />高雄市美濃區中興路二段45號
                        </li>
                    </ul>
                </div>
                <div class="divide-y-2 divide-white">
                    <ul class="mb-2">
                        <a href="#">
                            <i class="fab fa-facebook mr-1 icon-big"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-line mr-1 icon-big"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram mr-1 icon-big"></i>
                        </a>
                    </ul>

                    <div class="mb-1 mt-1">COPYRIGHT 人晨國際 2020 All right Reserved.</div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
footer {
    background: url("https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
        center bottom no-repeat;
    object-fit: cover;
    flex-direction: column;
    padding: 30px 100px;
}
</style>
