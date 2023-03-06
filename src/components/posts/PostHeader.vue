<template>
  <div class="md:rounded-t-3rem overflow-hidden md:mt-12 relative">
    <img class="w-full" src="../../assets/images/head.png" alt="head" />
    <div class="flex justify-between absolute w-full h-full px-8 top-20 z-10">
      <arrow-back-icon class="cursor-pointer" />
      <heart-icon class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeartIcon, ArrowBackIcon } from "../../components/icons/";
</script>
