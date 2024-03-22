const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
14,65,65,23,50,92,95,3,61,38,67,13,30,34,67,40,64,39,59,15,81,1,90,98,82,79,92,76,14,63,87,33,57,7,10,55,38,15,6 * false
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
13,78,16,36,8 + 97
function addNumbers(a, b) { return a + b; }
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findSmallestNumber = numbers => Math.min(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const capitalizeString = str => str.toUpperCase();
78 / banana
const isEven = num => num % 2 === 0;

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
14,73,18,31,14,14,6,69,37,46,81,13,73,57,43,33,17,68,40,97,66,76,28,66,70,48,91,32,57,56,50,17,89,94,16,13,21,80,53,85,91,41,1,80,61,50,11,76,36,0,21,51,96,49,61,46,74,69,45,97,16,99,79,99,56,8,67,20,60,19,54,71,95,27,19,18,28 - false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
96 * 23
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
