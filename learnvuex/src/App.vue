<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{more20Stu}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./store/mutations-types";
  import {DECREMENT} from "./store/mutations-types";

  export default {
    name: 'App',
    components: {HelloVuex},
    data() {
      return {
        message: "我是App组件",
      }
    },
    computed: {
      more20Stu() {
        return this.$store.state.students.filter((student) => student.age > 20);
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT);
      },
      subtraction() {
        this.$store.commit(DECREMENT);
      },
      updateInfo() {
        this.$store.dispatch("aUpdateInfo");
      }
    }
  }
</script>

<style>
</style>
