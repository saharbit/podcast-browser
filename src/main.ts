import { createApp, InjectionKey } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./index.css";
import App from "./App.vue";
import ShowPage from "./pages/ShowPage.vue";
import EpisodePage from "./pages/EpisodePage.vue";
import ShowsPage from "./pages/ShowsPage.vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  podcastSearch: string;
  shows: [];
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

const store = createStore<State>({
  state() {
    return {
      podcastSearch: "",
      shows: [],
    };
  },
  mutations: {
    setPodcastSearch(state, event) {
      state.podcastSearch = event.target.value;
    },
    setShows(state, shows) {
      state.shows = shows;
    },
  },
});

const routes = [
  { path: "/", component: ShowsPage },
  { path: "/podcast/:id", component: ShowPage },
  { path: "/episode/:id", component: EpisodePage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount("#app");
