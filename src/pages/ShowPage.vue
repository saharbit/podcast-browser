<template>
  <div v-if="isFetchingEpisodes">loading</div>
  <div class="flex flex-wrap">
    <EpisodeCard
      v-for="episode in episodes"
      :key="episode.id"
      :episode="episode"
    ></EpisodeCard>
  </div>
</template>

<script lang="ts">
import client from "../services/client";
import EpisodeCard from "../components/EpisodeCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShowPage",
  components: { EpisodeCard },
  data() {
    return {
      episodes: [],
      isFetchingEpisodes: false,
    };
  },
  methods: {
    async fetchEpisodes() {
      this.isFetchingEpisodes = true;
      let id = this.$route.params.id;
      client
        .fetchPodcastById({
          id,
        })
        .then((response: any) => {
          console.log(response);
          this.isFetchingEpisodes = false;
          this.episodes = response.data.episodes;
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchEpisodes();
  },
});
</script>

<style scoped></style>
