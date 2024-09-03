const she = ['Aparna', 'Purna', 'bou', 'punu'];
const sortedShe = she.sort();
console.log(sortedShe);

// sort
// const numbers = [4,5,2,3,7,6];
/**
 * ascending ---> smaller to larger: [2,3,4,5,6,7]
 * descending --> larger to smaller: [7,6,5,4,3,2]
 */
const numbers = [4,5,12,43,7,1,6];
// const numbers_asc = numbers.sort() // not working properly
const numbers_asc = [...numbers].sort(function(a, b) {return a - b})
const numbers_dsc = [...numbers].sort(function(a, b) {return b - a})

console.log(numbers_asc);
console.log(numbers_dsc);