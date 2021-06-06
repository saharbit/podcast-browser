<template>
  <div>
    <div v-if="isFetchingShows">loading</div>
    <input
      v-model="search"
      placeholder="Search for a pod"
      class="border p-2 rounded-md outline-none w-full"
    />
    <div class="flex flex-wrap">
      <ShowCard v-for="show in shows" :key="show.id" :show="show"></ShowCard>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import client from "../services/client";
import ShowCard from '../components/ShowCard.vue';

export default {
  name: "ShowsPage",
  components: {
    ShowCard
  },
  data() {
    return {
      token: null,
      search: "",
      isFetchingShows: false,
      shows: [],
    };
  },
  watch: {
    search: _.debounce(function (this: any, search: string) {
      if (search) {
        this.fetchShows(search);
      }
    }, 500),
  },
  methods: {
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
          console.log(response);
          this.isFetchingShows = false;
          this.shows = response.data.podcasts;
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
