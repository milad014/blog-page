<template>
  <div class="overflow-hidden rounded-full">
    <img class="min-w-48px min-h-48px" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  alt: { type: String, default: "" },
  src: { type: String, default: "" },
});
</script>
