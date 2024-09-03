/**
 * LOOPING TECHNIQUE
 * 1. for loop 
 * 2. while loop
 * 3. do while  --> ignore
 * 4. for of --> array loop korar jonno
 * 4. for in --> object loop korar jonno
 */

const she = ['aparna', 'purna', 'bou', 'punu'];

for(const her of she) {
    // console.log(her);
}

for(let i = 0; i < she.length; i++){
    // console.log(i);
    // console.log(she[i]);
}


const numbers = [2832,284,2849,48935,35893,53 ]

for (let i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
}

let i = 0;
while(i < she.length){
    // console.log(she[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}