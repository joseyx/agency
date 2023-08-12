import { createApp } from "vue";
// import App from "./App.vue";
import BaseContainer from "./components/BaseContainer.vue";
import BaseButton from "./components/BaseButton";
import router from "./router";
import HomeViewVue from "./views/HomeView.vue";

const app = createApp(HomeViewVue).use(router);
app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
