/*  ______ Instruction ____ 
Given a list of numbers. The numbers each repeat a certain number of times. 
source: https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/typescript */

/* _______ Task ________
Remove all numbers that repeat an odd number of times while keeping everything else the same.
Example: Given a function oddOnesOut(), which takes list of numbers ([1, 2, 3, 1, 3, 3]) as a parameter, and returns the output of [1, 1]
==> oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]) */

/* ______ Favourite Solution ______ */

export function oddOnesOut(nums: number[]) {
  let arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.filter(n => n === nums[i]).length % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

/* _____ Reason _____
- I chose this solution because it is straightforward and easy to understand. It uses a simple for loop to iterate through the array nums, and the logic inside the loop is clear (it checks if the count of occurrences of the current number is even using filter() and % 2 === 0) */
