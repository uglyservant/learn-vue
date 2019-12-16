import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const ShoppingCart = () => import("../views/shopping-cart/ShoppingCart");
const Profile = () => import("../views/profile/Profile");

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

// 3.导出router
export default router;
