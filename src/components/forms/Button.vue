<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <div>
    <button class="px-6 py-2 text-sm font-semibold uppercase rounded-sm">
      {{ props.text }}
    </button>
    <!-- <button class="button button--action">
      {{ props.text }}
    </button> -->
  </div>
</template>
