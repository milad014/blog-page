<template>
  <div class="py-5 px-10">
    <div class="flex gap-3 mt-4">
      <d-tag class="flex" v-for="tag in post?.tags" :key="tag" :value="tag" />
    </div>
    <div class="headline3 !leading-10 font-bold pt-5">
      {{ post?.title }}
    </div>
    <div class="pt-3 text-primary">
      Tortor, magnis porta id tellus faucibus.
    </div>

    <div class="flex flex-col">
      <d-avatar-card
        src="http://www.wallpaperg.com/uploads/file/1452484590-sweet-baby-boy-image-file.jpg"
        :time="post?.date"
        :author="post?.author"
      />
      <!-- in real version add sanitize for security  -->
      <div
        v-html="post?.content"
        class="title3 text-secondary-500 leading-7"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, toRefs } from "vue";

import { PostType } from "~/types/posts";

import { DTag, DAvatar } from "../../components/common/";

defineProps({
  post: { type: Object as PropType<PostType>, required: true },
});
</script>
