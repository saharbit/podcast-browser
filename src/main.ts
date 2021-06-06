import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./index.css";
import App from './App.vue';
import ShowPage from './pages/ShowPage.vue';
import EpisodePage from './pages/EpisodePage.vue';
import ShowsPage from './pages/ShowsPage.vue';

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
app.use(router);
app.mount("#app");
