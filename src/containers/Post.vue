<template>
  <d-container>
    <div class="md:rounded-t-3rem overflow-hidden md:mt-12 relative">
      <img class="w-full" src="../assets/images/head.png" alt="head" />
      <div class="flex justify-between absolute w-full h-full px-8 top-20 z-10">
        <arrow-back-icon class="cursor-pointer" />
        <heart-icon class="cursor-pointer" />
      </div>
    </div>
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
          src="/src/assets/images/avatar.png"
          :time="timeFromNow"
          :author="post?.author"
        />
        <!-- in real version add sanitize for security  -->
        <div v-html="content" class="title3 text-secondary-500 leading-7"></div>
      </div>
    </div>
  </d-container>
  <div class="w-full m-auto bg-secondary-300">
    <d-container class="flex gap-4 p-8">
      <div>
        <d-avatar src="/src/assets/images/avatar.png" :alt="post?.author" />
      </div>
      <div class="flex flex-col gap-3">
        <div class="text-primary font-bold leading-8 title1">
          About the author
        </div>
        <div class="text-secondary-500 body1 leading-6">
          Latoyia is a New York Times bestseller and a RITA® winner.
        </div>
        <div class="flex gap-4 py-2">
          <d-button :round-full="true" title="Following">
            <template #left-icon>
              <check-icon />
            </template>
          </d-button>
          <div
            class="bg-white border-2 border-disable flex items-center justify-center rounded-5 cursor-pointer w-12"
          >
            <save-icon class="text-primary" />
          </div>
        </div>
      </div>
    </d-container>
  </div>
  <d-container>
    <comments :comments="post?.comments" />
  </d-container>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import {
  DTag,
  DAvatar,
  DAvatarCard,
  DButton,
  DContainer,
} from "../components/common/";
import Comments from "../components/posts/Comments.vue";

import {
  HeartIcon,
  ArrowBackIcon,
  CheckIcon,
  SaveIcon,
} from "../components/icons/";

import { getPost } from "../services/post.services";

const post = ref();
const route = useRoute();
const content = computed(() => post.value?.content);

const timeFromNow = computed(() => {
  dayjs.extend(relativeTime);
  return dayjs(post.value?.date).fromNow();
});
const fetchPost = async () => {
  const postInfo = await getPost(route.params.id as string);
  post.value = postInfo.data;
};
onMounted(() => {
  fetchPost();
});
</script>
