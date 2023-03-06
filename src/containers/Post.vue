<template>
  <d-container>
    <post-header />
    <post-body :post="post" />
  </d-container>
  <author-biography />
  <comments :comments="post?.comments" />
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { DContainer } from "../components/common/";
import Comments from "../components/posts/Comments.vue";
import AuthorBiography from "../components/posts/AuthorAbout.vue";
import PostHeader from "../components/posts/PostHeader.vue";
import PostBody from "../components/posts/PostBody.vue";

import { getPost } from "../services/post.services";

const post = ref();
const route = useRoute();

const fetchPost = async () => {
  const postInfo = await getPost(route.params.id as string);
  post.value = postInfo.data;
};
onMounted(() => {
  fetchPost();
});
</script>
