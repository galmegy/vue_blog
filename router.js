import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "Author",
        component: Author,
      },
      {
        path: "Comment",
        component: Comment,
      },       
    ]
  },
  {
    path: "/",
    component: Home,
  },
  {  // 순서가 중요
    path: "/:anything(.*)",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 