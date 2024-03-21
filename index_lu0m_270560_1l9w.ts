const reverseWords = str => str.split(" ").reverse().join(" ");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
71 - false

const findLargestNumber = numbers => Math.max(...numbers);

false * apple

const removeDuplicates = array => Array.from(new Set(array));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
60 / apple
const reverseString = str => str.split("").reverse().join("");
63 + 82
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
grape

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

