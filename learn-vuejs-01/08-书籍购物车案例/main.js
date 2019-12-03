const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.00,
        count: 1,
      }
    ]
  },
  methods: {
    getFormatPrice(price) {
      return "￥" + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0.00;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      // let totalPrice = 0;
      // for (let book of this.books) {
      //   totalPrice += book.price * book.count;
      // }
      // return totalPrice;

      return this.books
          .reduce((preValue, book) => preValue + book.price * book.count, 0);
    }
  },
  filters: {
    priceFilter(price) {
      return "￥" + price.toFixed(2);
    }
  }
});

// 编程范式：命令式编程/声明式编程
// 编程方式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce

const nums = [10, 20, 11, 222, 444, 40, 50];
// filter中的回调函数有一个要求，就是必须返回一个boolean值
// 当返回值为true时，函树内部会自动将这次回调的n加入到新的数组中
// 当返回值为false时，函数内部会过滤掉这次的n

// nums.filter(function (n) {
//   return n < 100;
// }).map(function (n) {
//   return n * 2;
// }).reduce(function (preValue, n) {
//   return preValue + n;
// }, 0);

nums.filter((n) => {return n < 100})
    .map((n) => {return n * 2})
    .reduce((preValue, n) => {return preValue + n}, 0);
