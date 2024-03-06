// let operators = "";
// let startingValue = "";
// let EndingValue = "";
// let store = document.getElementById("calculator");

// function buttoned(number) {
//   store.value += number;
//   if (operators.length === 0) {
//     startingValue += number;
//   } else {
//     EndingValue += number;
//   }
// }
// function operator(a) {
//   store.value += a;
//   operators = a;
// }
// function MC() {
//   store.value = "";
// }
// function Clearing(a) {
//   store.value = a;
// }
// function Result() {
//   if (operators === "+") {
//     let x = Number(startingValue) + Number(EndingValue);
//     console.log(x);
//   }
//   if (operators === "-") {
//     let x = Number(startingValue) - Number(EndingValue);
//     console.log(x);
//   }
//   if (operators === "*") {
//     let x = Number(startingValue) * Number(EndingValue);
//     console.log(x);
//   }
//   if (operators === "/") {
//     let x = Number(startingValue) / Number(EndingValue);
//     console.log(x);
//   }
// }

// let counter = 1;
// document.getElementById("demo").innerHTML = counter;

// function increment() {
//   let value = (document.getElementById("demo").innerHTML = counter);
//   value = counter++;
// }
// function decrement() {
//   let value = (document.getElementById("demo").innerHTML = counter);

//   value = counter > 1 ? counter-- : counter;
// }

// let storeData = document.getElementById("calculator");
// let operatorData = "";
// let startValue = "";
// let endValue = "";
// let storeDecimal = "";
// const buttoned = (numbers) => {
//   console.log(numbers);
//   storeData.value += numbers;

//   if (operatorData.length === 0) {
//     startValue += numbers;
//   } else {
//     endValue += numbers;
//   }
// };
// const decimal = (dot) => {
//   console.log(dot);
//   storeData.value += dot;
//   storeDecimal = dot;
//   // console.log(dot);
// };
// const operator = (operations) => {
//   console.log(operations);
//   storeData.value += operations;
//   operatorData = operations;
// };
// const Result = () => {
//   console.log(operatorData);
//   if (operatorData === "+") {
//     storeData.value = Number(startValue) + Number(endValue);
//     // console.log(startValue, endValue);
//   }
//   if (operatorData === "-") {
//     storeData.value = startValue - endValue;
//     // console.log(startValue - endValue);
//   }
//   if (operatorData === "*") {
//     storeData.value = startValue * endValue;
//     // console.log(typeof (startValue * endValue));
//   }
//   if (operatorData === "/") {
//     storeData.value = startValue / endValue;
//     // console.log(startValue / endValue);
//   }
//   if (storeDecimal === ".") {
//     console.log(startValue + "." + endValue);
//     // storeData.value = startValue + "." + endValue;
//   }
// };
