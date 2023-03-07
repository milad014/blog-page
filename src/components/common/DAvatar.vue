<template>
  <div class="overflow-hidden rounded-full">
    <img class="w-48px h-48px" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  alt: { type: String, default: "" },
  src: { type: String, default: "" },
});
</script>
