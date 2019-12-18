import axios from "axios"

export function request(config) {
  // return new Promise((resolve, reject) => {
  //   const instance = axios.create({
  //     baseURL: "http://123.207.32.32:8000",
  //     timeout: 5000
  //   });
  //
  //   instance(config)
  //     .then(result => {
  //       resolve(result);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     })
  // });
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  // 2. 拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(
    config => {
      console.log(config);

      // 1. config 中的一些信息不符合服务器的要求
      // 2. 某些网络请求，必须携带一些特殊的信息（Token）

      return config;
    },
    error => {

    });

  // 2.2 响应拦截
  instance.interceptors.response.use(
    result => {
      return result;
    },
    error => {
      console.log(error);
    }
  );

  // 3.
  return instance(config)
}
