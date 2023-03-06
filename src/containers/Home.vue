<template>
  <div class="h-100vh flex flex justify-center items-center">
    <h1 class="md:text-4xl px-5">
      <div class="flex justify-center py-36">
        <d-loading class="w-20 h-20" />
      </div>
      You will redirect to post page after {{ time }}
      {{ time > 1 ? "seconds" : "second" }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { DLoading } from "../components/common";
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const time = ref(5);

setInterval(() => time.value--, 1000);

watchEffect(() => {
  if (!time.value) {
    router.push("/post/1");
  }
});
</script>
