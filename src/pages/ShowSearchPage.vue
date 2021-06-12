<template>
  <div>
    <div v-if="isFetchingShows">loading</div>
    <input
      :value="podcastSearch"
      @input="this.setPodcastSearch"
      placeholder="Search for a pod"
      class="border p-2 rounded-md outline-none w-full h-12"
    />
    <div class="flex flex-wrap">
      <ShowCard v-for="show in shows" :key="show.id" :show="show"></ShowCard>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import client from "../services/client";
import ShowCard from "../components/ShowCard.vue";
import { computed, defineComponent } from "vue";
import { useStore } from "../main";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "ShowSearchPage",
  components: {
    ShowCard,
  },

  data() {
    return {
      token: null,
      search: "",
      isFetchingShows: false,
    };
  },
  watch: {
    podcastSearch: _.debounce(function (this: any, search: string) {
      if (search) {
        this.fetchShows(search);
      }
    }, 500),
  },
  computed: mapState({
    podcastSearch: (state: any) => state.podcastSearch,
    shows: (state: any) => state.shows,
  }),
  methods: {
    ...mapMutations(["setPodcastSearch", "setShows"]),
    async fetchShows(search: string) {
      this.isFetchingShows = true;

      client
        .typeahead({
          q: search,
          show_podcasts: 1,
          show_genres: 0,
          safe_mode: 0,
        })
        .then((response: any) => {
          this.isFetchingShows = false;
          this.setShows(response.data.podcasts);
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped></style>
