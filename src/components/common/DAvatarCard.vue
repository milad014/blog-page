<template>
  <div class="flex gap-4 items-center pt-4">
    <d-avatar :src="src" :alt="author" />
    <div class="flex flex-col">
      <div class="font-600 text-secondary-500 body3">{{ author }}</div>
      <div class="text-secondary-400 font-500 body3 leading-5">
        <d-remaining-time :time="time" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DAvatar, DRemainingTime } from "../common";

defineProps({
  time: { type: String, default: "" },
  author: { type: String, default: "" },
  src: { type: String, default: "" },
});
</script>
