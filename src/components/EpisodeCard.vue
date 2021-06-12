<template>
  <div
    @click="setLiveEpisode(episode)"
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
      hover:border-black
      cursor-pointer
    "
  >
    <img v-bind:src="episode.thumbnail" class="w-32 h-32" />
    <div class="flex flex-col ml-2">
      <div class="font-bold">{{ episode.title }}</div>
      <div v-html="episode.description" class="mt-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "EpisodeCard",
  props: ["episode"],
  methods: {
    ...mapMutations(["setLiveEpisode"]),
  }
});
</script>

<style></style>
