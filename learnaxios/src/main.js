import Vue from 'vue'
import axios from 'axios';
import App from './App'

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});

// // axios全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
//
// axios({
//   url: "/home/multidata",
//   method: "get"
// }).then(result => {
//   console.log(result);
// });
//
// axios({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 3
//   },
//   method: "get"
// }).then(result => {
//   console.log(result);
// });
//
// axios.all([
//   axios({
//
//   }),
//   axios({
//
//   })
// ]).then(result => {
//   console.log(result);
// });

// 4. 创建对应的axios的实例
// const instanceHome = axios.create({
//   baseURL: "http://222.111.33.33:8000/home",
//   timeout: 5000
// });
//
// instanceHome({
//   url: "/data",
// }).then(result => {
//   console.log(result);
// });
//
// instanceHome({
//   url: "http://"
// });


// 5. 封装request模块
import {request} from "./network/request";
//
// request({url: "/home/multidata"},
//     result => {console.log(result)},
//   error => {console.log(error)});

request({

}).then().catch();
