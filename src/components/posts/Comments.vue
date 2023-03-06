<template>
  <div class="py-8 px-10 flex flex-col gap-5">
    <div class="text-primary leading-8 font-bold headline3">Share a reply?</div>
    <div>
      <textarea
        v-model="text"
        placeholder="Your message..."
        rows="3"
        class="bg-secondary-200 rounded-4 text-secondary-600 w-full p-5 outline-transparent"
      ></textarea>
      <d-button
        v-if="text.length"
        :round-full="true"
        :loading="isLoading"
        title="Submit"
        class="flex justify-center my-3"
        @click="handleSubmit"
      />
    </div>
    <comment
      v-for="comment in comments"
      :key="comment.username"
      :comment="comment"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRef, toRefs } from "vue";

import { DAvatarCard, DButton } from "../../components/common/";

import Comment from "./Comment.vue";
import type { CommentType } from "../../types/posts";

import { createComment } from "../../services/post.services";

const text = ref("");
const isLoading = ref(false);

defineProps({
  comments: { type: Object as PropType<CommentType[]>, required: true },
});

function handleSubmit() {
  isLoading.value = true;
  createComment(1, { text: text.value })
    .then((res) => {
      text.value = "";
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>
