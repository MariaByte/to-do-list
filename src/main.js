import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Todos from "./pages/Todos.vue";

const app = createApp(App);

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/todos", name: "Todos", component: Todos },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount("#app");
