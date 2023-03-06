<template>
  <div class="bg-secondary-100 p-10">
    <d-container class="flex flex-col gap-8 sm:px-12">
      <div class="text-secondary-500 title1">Company</div>
      <div class="flex justify-between text-primary font-bold body1">
        <div>About</div>
        <div>Community</div>
      </div>
      <div class="flex justify-center gap-8">
        <div class="cursor-pointer">
          <a href="#">
            <facebook-icon />
          </a>
        </div>
        <div class="cursor-pointer">
          <a href="#">
            <instagram-icon />
          </a>
        </div>
        <div class="cursor-pointer">
          <a href="#">
            <youtube-icon />
          </a>
        </div>
      </div>
    </d-container>
  </div>
</template>

<script setup lang="ts">
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "../icons";
import { DContainer } from "../common";
</script>
