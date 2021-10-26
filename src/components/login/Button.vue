<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <div>
    <button class="buttons font-semibold mr-2">{{ props.text }}</button>
  </div>
</template>
