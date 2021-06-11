<template>
  <div class="bg-beige min-h-screen">
    <div class="container mx-auto max-w-screen-lg p-2">
      <h1 class="text-center py-4 text-lg">Podcast Browser</h1>
      <RouterView />
    </div>
    <PodcastPlayer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PodcastPlayer from "./components/PodcastPlayer.vue";

export default defineComponent({
  name: "App",
  components: {
    PodcastPlayer,
  },
});
</script>

<style></style>
