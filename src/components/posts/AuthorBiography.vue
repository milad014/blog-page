<template>
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
          <d-button round-full title="Following">
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
</template>

<script setup lang="ts">
import { CheckIcon, SaveIcon } from "../../components/icons/";
import { DButton, DContainer, DAvatar } from "../../components/common/";
import { PropType, toRefs } from "vue";
import { PostType } from "../../types/posts";

const props = defineProps({
  post: { type: Object as PropType<PostType>, required: true },
});

const { post } = toRefs(props);
</script>
