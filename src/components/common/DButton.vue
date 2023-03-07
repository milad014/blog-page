<template>
  <div
    class="bg-violet-100 text-white cursor-pointer body3 font-600 inline-block px-3 h-40px py-3px h-28px flex font-500 items-center py-1 text-tag body3 bg-tag"
    :class="{ [$style.roundedFull]: roundFull }"
  >
    <slot name="left-icon" />
    <d-loading v-if="loading" />
    <span v-else class="px-2">
      {{ title }}
    </span>
    <slot name="right-icon" />
  </div>
</template>

<script setup lang="ts">
import { DLoading } from "../common";
const props = defineProps({
  title: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  roundFull: { type: Boolean, default: false },
});
</script>

<style lang="css" module>
.roundedFull {
  border-radius: 20px;
}
</style>
