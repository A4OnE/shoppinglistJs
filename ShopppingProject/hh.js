// Sure! Here's a challenge involving the splice() method:

// Challenge 1:
// Given an array of numbers, write a function that removes all even numbers
//  from the array and replaces them with their squares. The function should modify
//  the original array and return the modified array.
// Example:
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(removeEvenAndSquare(numbers)); // Output: [1, 4, 3, 16, 5, 36]

// const numbers = [1, 2, 3, 4, 5, 6];

// function removeEvenAndSquare(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       const storeValue = num[i] * num[i];
//       // console.log(num.splice(i, 1, storeValue));
//       num.splice(i, 1, storeValue);
//     }
//   }
//   // console.log(num);
//   return num;
// }
// console.log(removeEvenAndSquare(numbers));

// Challenge 2:
// Suppose you have an array of strings representing the names of students
//  in a class, and you want to remove a specific student from the class
// roster. Write a function removeStudentFromClass(classRoster, studentName)
//  that removes the specified studentName from the classRoster array using the splice() method.
// Example usage:

// const classRoster = ["Alice", "Bob", "Charlie", "David", "Eva"];
// const studentToRemove = "David";
// removeStudentFromClass(classRoster, studentToRemove);
// console.log(classRoster); // Output: ["Alice", "Bob", "Charlie", "Eva"]

// const classRoster = ["Alice", "Bob", "Charlie", "David", "Eva"];
// const studentToRemove = "David";

// function removeStudentFromClass(classRoster, studentToRemove) {
//   const index = classRoster.indexOf(studentToRemove);
//   classRoster.splice(index, 1);
//   console.log(classRoster);
// }
// removeStudentFromClass(classRoster, studentToRemove);

// Challenge 3:
// Suppose you have an array of numbers, and you want to remove all elements
// from the array that are greater than a given value threshold.
//  Write a function removeGreaterThanThreshold(arr, threshold)
//   that removes all elements greater than threshold from the array
//    arr using the splice() method.

// Example usage:
// const numbers = [10, 20, 30, 40, 50];
// const threshold = 30;
// removeGreaterThanThreshold(numbers, threshold);
// console.log(numbers); // Output: [10, 20, 30]
// first loop  nums.splice(i, 1);
//               0   1   2   3   4   5   6   7   8   9   10
//              [10, 55,10, 50, 20, 30, 40, 50, 90, 20, 299]

// second loop  nums.splice(i, 1);
//               0   1   2   3   4   5   6   7   8   9
//              [10,10, 50, 20, 30, 40, 50, 90, 20, 299]

// third loop  nums.splice(i, 1);
//               0   1   2   3   4   5   6   7   8
//              [10,10, 20, 30, 40, 50, 90, 20, 299]

// fourth loop  nums.splice(i, 1);
//               0   1   2   3   4   5   6   7
//              [10,10, 20, 30, 50, 90, 20, 299]

// fifth loop  nums.splice(i, 1);
//               0   1   2   3   4   5   6
//              [10,10, 20, 30, 50, 20, 299]

// const numbers = [50, 10, 50, 10, 30, 8, 80, 90, 80, 50];
// const threshold = 30;

// const removeGreaterThanThreshold = (nums, thres) => {
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] > thres) {
//       // console.log(i, nums[i]);
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums;
// };
// console.log(removeGreaterThanThreshold(numbers, threshold));

// Replace "banana" with "mango" in the shopping cart
// replaceItem(shoppingCart, "banana", "mango");

// Output the updated shopping cart
// console.log("Updated Shopping Cart:", shoppingCart);

// let shoppingCart = ["apple", "banana", "orange", "pear", "grape"];
// const replaceItem = (cart, currentItem, newItem) => {
//   const index = cart.indexOf(currentItem);
//   if (index !== -1) {
//     cart.splice(index, 1, newItem);
//   }
//   return cart;
// };
// console.log(replaceItem(shoppingCart, "banana", "mango"));
