let name = "小明";
let age = 18;
let flag = true;

function sum(num1, num2) {
    return num1 + num2;
}

if (flag) {
    console.log(sum(20, 30));
}

// 导出方式一
export {
    flag,
    sum
}

// 导出方式二
export const num1 = 1000;
export const height = 1.83;

// 导出函数和类
export function multiply(number1, number2) {
    return number1 * number2;
}

export class Person {
    name;
    gender
}