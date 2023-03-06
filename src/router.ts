import { createRouter, createWebHistory } from "vue-router";
import Post from "./containers/Post.vue";
import Home from "./containers/Home.vue";

const routes: Array<any> = [
  { path: "/", component: Home },
  { path: "/post/:id/", component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/post/:id/", component: Post },
  ],
});

export default router;
