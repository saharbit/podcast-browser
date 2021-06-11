<template>
  <router-link :to="`/podcast/${show.id}`">
  <div
    class="
      flex flex-row
      border
      border-beige-dark
      rounded-md
      hover:border-black
      cursor-pointer
      mr-2
      my-2
      transition-all
      items-center
    "
  >
    <img v-bind:src="show.thumbnail" class="w-12 h-12 rounded-l" />
    <div class="flex flex-col p-2">
      <div>{{ show.title_original }}</div>
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
