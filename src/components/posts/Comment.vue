<template>
  <d-avatar-card
    src="/src/assets/images/avatar2.png"
    :time="timeFromNow"
    :author="comment?.username"
  />
  <div
    :class="[
      'title3 text-secondary-500 leading-7 bg-secondary-200 rounded-4 p-5',
      $style.noRoundTopLeft,
    ]"
  >
    {{ comment?.text }}
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, toRefs } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { DAvatarCard } from "../../components/common";
import type { CommentType } from "../../types/posts";

const props = defineProps({
  comment: { type: Object as PropType<CommentType>, required: true },
});

const { comment } = toRefs(props);

const timeFromNow = computed(() => {
  dayjs.extend(relativeTime);
  return dayjs(comment.value?.date).fromNow();
});
</script>

<style module lang="css">
.noRoundTopLeft {
  border-top-left-radius: 0;
}
</style>
