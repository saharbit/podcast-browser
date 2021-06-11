<template>
  <div
    class="
      flex flex-row
      border border-beige-dark
      p-2
      rounded-md
      mr-2
      my-2
      transition-all
      items-center
      relative
    "
  >
    <img v-bind:src="episode.thumbnail" class="w-24 h-24" />
    <div class="flex flex-col ml-2">
      <div class="font-bold">{{ episode.title }}</div>
      <div v-html="episode.description" class="mt-2"></div>
    </div>
    <img
      src="../assets/play-circle.svg"
      class="
        absolute
        w-12
        h-12
        right-5
        bottom-5
        cursor-pointer
        hover:opacity-75
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EpisodeCard",
  props: ["episode"],
});
</script>

<style></style>
