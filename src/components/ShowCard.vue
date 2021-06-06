<template>
  <router-link :to="`/podcast/${show.id}`">
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
    <img v-bind:src="show.thumbnail" class="w-24 h-24" />
    <div class="flex flex-col ml-2">
      <div>{{ show.title_original }}</div>
      <!-- <div class="w-24 truncate">{{ show.description }}</div> -->
    </div>
  </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ShowCard",
    props: ['show'],
});
</script>

<style>
</style>
