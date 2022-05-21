const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

// console.log("Results for the tinyArray");
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

//1 sum zero
let array = [28, 43, -12, 30, 4, 0, 12];

let value = "false";
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "true";
      }
    }
  }
}

console.log("value", value);
// space complexity O(1)

//2 unique characters
const hasUniqueChars = (word) => {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
};
// timer on function
perf.start();
hasUniqueChars(smallArray);
let resultsHasUniqueChars = perf.stop();
console.log("hasUniqueChars", resultsHasUniqueChars.preciseWords);

console.log(hasUniqueChars("monday"), "hasUniqueChars");
console.log(hasUniqueChars("moonday"), "hasUniqueChars");
// space complexity O(1)

//3 pangram sentence
const isPangramSentence = (string) => {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

//timer start
perf.start();
hasUniqueChars(largeArray);
let resultsIsPangramSentence = perf.stop();
console.log("IsPangramSentence", resultsIsPangramSentence.preciseWords);

console.log(
  isPangramSentence("The quick brown fox jumps over the lazy dog!"),
  "isPangramSentence"
);
console.log(
  isPangramSentence("I like cats, but not mice"),
  "isPangramSentence"
);
// space complexity O(n)

//4 longest word

const longestWordChallenge = (str) => {
  let strSplit = str.split(" ");

  let longestWord = 0;

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }

  return str.length;
};

//timer start
perf.start();
longestWordChallenge("hello world");
let resultsLongestWordChallenge = perf.stop();
console.log("longestWordChallenge", resultsLongestWordChallenge.preciseWords);

console.log(longestWordChallenge("hello world"), "longestWord");
// space complexity O(n)
