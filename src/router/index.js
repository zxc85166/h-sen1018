import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
import About from "/src/pages/About.vue";
import Foo from "/src/pages/Foo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/foo",
    name: "Foo",
    component: Foo,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
