<template>
  <main>
    <router-view />
    <!-- footer is common in all page -->
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from "./components/layouts/Footer.vue";
</script>
