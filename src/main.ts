import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./setup/router";
import { key, store } from "./setup/store";

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount("#app");
