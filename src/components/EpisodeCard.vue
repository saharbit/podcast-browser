<template>
  <router-link :to="`/episode/${episode.id}`">
    <div
      class="
        flex flex-row
        border
        p-2
        rounded-md
        hover:border-black
        cursor-pointer
        mr-2
        my-2
        transition-all
      "
    >
      <img v-bind:src="episode.thumbnail" class="w-24 h-24" />
      <div class="flex flex-col ml-2">
        <div>{{ episode.title }}</div>
        <div v-html="episode.description"></div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EpisodeCard",
  props: ["episode"],
});
</script>

<style></style>
