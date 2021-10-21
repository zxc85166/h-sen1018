<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <div>
    <button class="button">
      {{ props.text }}
    </button>
    <!-- <button class="button button--action">
      {{ props.text }}
    </button> -->
  </div>
</template>
