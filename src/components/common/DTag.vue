<template>
  <div
    class="inline-block px-3 py-3px h-28px flex font-500 items-center py-1 rounded-md text-violet-200 body3 bg-violet-50 cursor-pointer"
  >
    {{ value }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["value"]);
</script>
