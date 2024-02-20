const myAge = 20;//constant variavle creation
let earlyYears = 2;//assigning earlyYears to 2
earlyYears *= 10.5;
let laterYears = myAge - 2;// assigning laterYears to myAge minus 2
laterYears *= 4;

//checking early and later years
console.log('Early years is', earlyYears);
console.log('Later years is', laterYears);


let myAgeInDogYears = earlyYears + laterYears;

//lowercasing method
let myName = 'Espe Bobo'.toLowerCase();
console.log(myName);

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);