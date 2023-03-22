  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
// The parameters the callback function takes are typically called 
// acc, for accumulator, and curr for current value.  
let sum = nums.reduce((acc, curr) => acc + curr);

// The accumulator represents the value that will  ultimately be returned 
// from the reduce method.  In this case it will accumulate and keep track 
// of the sum as the callback function is executed on each array element.

console.log(sum);

// Though it's technically optional, as an advanced  JavaScript developer
// you should always specify the initial value to use for the accumulator 
// in order  to be explicit with your intentions.
// let sum = nums.reduce((acc, curr) => acc + curr, 0);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too

// Just to be crystal clear, this first set of curly braces is the boundaries 
// of the  callback function, and the second set after the  comma is our initial 
// value, an empty object. This  is what the accumulator will be on the first pass. 

// {Developer: 12, Designer: 4} <-- this is what we want to achieve

let experienceByProfession = teamMembers.reduce((acc, curr) => {
let key = curr.profession;
if (!acc[key]) {
  acc[key] = curr.yrsExperience;
} else {
  acc[key] += curr.yrsExperience;
}
return acc;
}, {});
console.log(experienceByProfession);