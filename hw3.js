"use strict";

//task1
function splitAndMerge(str, sp) {
  var words = str.split(" ");
  var symbols = [];

  for (var i = 0; i < words.length; i++) {
    symbols.push(words[i].split("").join(sp));
  }
  return symbols.join(" ");
}

console.log(splitAndMerge("Hello World!", ",")); //should return "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", " ")); //should return "H,e,l,l,o W,o,r,l,d,!"

//task2
function convert(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

console.log(convert({ name: "Jeremy", age: 24, role: "Software Engineer" })); //[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

//task3
function toCamelCase(str) {
  var words = str
    .split("_")
    .join("-")
    .split("-");
  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(toCamelCase("the-stealth-warrior")); //returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); //returns "theStealthWarrior"

//task4
function reverseWords(str) {
  var words = str.split(" ");
  words = words.map(function(word) {
    return word
      .split("")
      .reverse()
      .join("");
  });
  return words.join(" ");
}

console.log(reverseWords(" A fun little challenge! ")); //returns " A nuf elttil !egnellahc "

//task5
function stringExpansion(str) {
  var characters = str.split("");
  var times = 1;
  var result = characters.reduce(function(newStr, character) {
    if (isFinite(character)) {
      times = character;
    } else {
      for (var i = 0; i < times; i++) {
        newStr += character;
      }
      times = 1;
    }
    return newStr;
  }, "");
  return result;
}

console.log(stringExpansion("3D2a5d2f") === "DDDaadddddff"); //returns true
console.log(stringExpansion("3d332f2a") === "dddffaa"); //returns true
console.log(stringExpansion("abcde") === "abcde"); //returns true

//task6
function largest() {
  var max = arguments[0];
  for (var i = 0; i < arguments.length; i++)
    if (arguments[i] > max) max = arguments[i];
  return max;
}

console.log(largest(2, 0.1, -5, 100, 3)); //returns 100

function smallest() {
  var min = arguments[0];
  for (var i = 0; i < arguments.length; i++)
    if (arguments[i] < min) min = arguments[i];
  return min;
}

console.log(smallest(2, 0.1, -5, 100, 3)); //returns -5

//task7
function transform(arr) {
  return arr.map(function func(i) {
    return function() {
      return i;
    };
  });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

//task8
function sum(acc) {
  if (arguments.length === 1) return acc;
  var argsFromSecondEl = [].slice.call(arguments, 1);
  return sum.apply(null, argsFromSecondEl) + acc;
}

console.log(sum(1, 3, 5, 7)); //should return 16

//task9
function countDown(num) {
  setTimeout(function tick() {
    if (num >= 0) {
      console.log(num);
      num -= 1;
    }
    var timerId = setTimeout(tick, 1000); // (*)
  }, 1000);
}

console.log(countDown(3)); // 3 2 1 0

//task10
Function.prototype.myBind = function(context) {
  var func = this;
  var args = [].slice.call(arguments, 1);
  return function() {
    args = args.concat([].slice.call(arguments));
    return func.apply(context, args);
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10
