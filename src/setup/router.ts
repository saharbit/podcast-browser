import ShowSearchPage from "../pages/ShowSearchPage.vue";
import ShowPage from "../pages/ShowPage.vue";
import EpisodePage from "../pages/EpisodePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: ShowSearchPage },
  { path: "/podcast/:id", component: ShowPage },
  { path: "/episode/:id", component: EpisodePage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
