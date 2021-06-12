import { createApp, InjectionKey } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./index.css";
import App from "./App.vue";
import ShowPage from "./pages/ShowPage.vue";
import EpisodePage from "./pages/EpisodePage.vue";
import ShowSearchPage from "./pages/ShowSearchPage.vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  podcastSearch: string;
  shows: [];
  liveEpisode: object | null;
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
      liveEpisode: null
    };
  },
  mutations: {
    setPodcastSearch(state, event) {
      state.podcastSearch = event.target.value;
    },
    setShows(state, shows) {
      state.shows = shows;
    },
    setLiveEpisode(state, episode) {
      state.liveEpisode = episode;
    }
  },
});

const routes = [
  { path: "/", component: ShowSearchPage },
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
