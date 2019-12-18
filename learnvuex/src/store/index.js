import Vue from "vue"
import Vuex from "vuex"
import {INCREMENT} from "./mutations-types";
import {DECREMENT} from "./mutations-types";

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
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    updateInfo(state) {
      state.counter = 1;
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      setTimeout(() => {
        context.commit("updateInfo");
      }, 1000)
    }
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
