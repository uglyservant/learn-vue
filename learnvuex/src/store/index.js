import Vue from "vue"
import Vuex from "vuex"

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {name: "kobe", age: 10},
      {name: "james", age: 23},
      {name: "jack", age: 17},
      {name: "rage", age: 36}
    ]
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20Stu(state) {
      return state.students.filter((student) => student.age > 20);
    },
    more20StuLength(state, getters) {
      return getters.more20Stu.length;
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter((s) => s.age > age);
      }
    }
  },
  modules: {

  }
});

// 3. 导出对象
export default store
