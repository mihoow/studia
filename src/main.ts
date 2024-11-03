import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/tailwind.css";

createApp(App).use(router).mount("#app");
