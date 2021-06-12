import { InjectionKey } from "vue";
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

export const store = createStore<State>({
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
