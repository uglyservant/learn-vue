<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="https://img.icons8.com/android/24/000000/home.png" alt="">
        <img slot="item-icon-active" src="https://img.icons8.com/windows/32/000000/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="https://img.icons8.com/metro/26/000000/categorize.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping-cart">
        <img slot="item-icon" src="https://img.icons8.com/metro/26/000000/shopping-cart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="https://img.icons8.com/material-rounded/26/000000/contract-job.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
