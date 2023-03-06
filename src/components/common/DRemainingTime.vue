<template>{{ timeFromNow }}</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { computed, toRefs } from "vue";

const props = defineProps({
  time: { type: String, default: "" },
});

const { time } = toRefs(props);

const timeFromNow = computed(() => {
  dayjs.extend(relativeTime);
  return dayjs(time.value).fromNow();
});
</script>
