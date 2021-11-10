// array slice

const modifiedFood = (foods) => {
    var a = foods.slice(1,foods.length-1);
    console.log("aa",a);
    return a;
}
var foods = ['pizza','burger','fingerChips','donuts','springRoll'];
var t = modifiedFood(foods);

// array splice

    foods.splice(2, 0, 'noodles','icecream');
    console.log("aa",foods);



//lambda
// const isEvenNum = (numberArray) => numberArray % 2 === 0;

const isEven = (numberArray) => {
    var evens = numberArray.filter(( num ) => isEvenNum(num));
    console.log("even", evens);
    return evens;
}

//reject 
const isPrime = (numberArray) => {
  let j = 0;
  var nonprime = [];
  var prime = numberArray.filter((num) => {
    let count = 0;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        nonprime[j] = num;
        count++;
      }
    }
    if (count === 0) {
      return num;
    }
    j += 1;
  });
  console.log("prime", prime);
  console.log("non prime", nonprime);
};





var numberArray = [12,324,213,4,2,3,45,4234];
var even = isEven(numberArray);
var even1 = isPrime(numberArray);
var even2 = nonPrime(numberArray);

//map
const findSquareOfNumbers = (myArray) => {
    let sqNum = myArray.map(x => x * x);
    console.log("sq num",sqNum);
    return sqNum;
} 

const myArray = [11,34,20,5,53,16];
let arr = findSquareOfNumbers(myArray);

//reduce 
const multiply = (myArray) => {
    let res = myArray.reduce((a, b) => {
        return a * b;
    });
    console.log("res",res);
}
const myArray = [2,3,5,10];
let m = multiply(myArray);