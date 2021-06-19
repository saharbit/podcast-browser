<template>
  <div class="fixed w-screen bottom-0 h-24 bg-beige-dark border-t border-black">
    <div v-if="episode">{{ episode.title }}</div>
    <audio controls>
      <source
        src="https://www.listennotes.com/e/p/d8555e7a045343448a9a6baf4c07144f/"
      />
    </audio>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PodcastPlayer",
  computed: mapState({
    episode: (state) => state.liveEpisode,
  }),
};
</script>

<style scoped></style>
