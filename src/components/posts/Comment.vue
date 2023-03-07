<template>
  <div class="flex flex-col gap-5">
    <d-avatar-card
      src="/src/assets/images/avatar2.png"
      :time="comment?.date"
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
</script>

<style module lang="css">
.noRoundTopLeft {
  border-top-left-radius: 0;
}
</style>
