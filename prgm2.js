//wap to find the cube of a given number using function


function cube(num){
    console.log(`cube of ${num} is`);
    return value = num **3
}


console.log(cube(3));
console.log('------------------------');


//wap to find a given number is odd or even using function

function evenOdd(num1){
    if(num1%2==0){
        console.log(`${num1} is even`);
        
    }
    else{
        console.log(`${num1} is odd`);
    }
    
    // using ternary operator
    // return num1%2 == 0?'even':'odd'
}
evenOdd(8)
// console.log(evenOdd(13));

console.log('------------------------');

// Using Arrow Function

const oddeven = (num2) => num2%2 == 0?'even':'odd'
console.log(oddeven(13));
console.log('------------------------');


//wap to find a given number is positive or negative using arrow function

const posNeg = (number) => number>0?'positive': number == 0?'neither positive nor negative':'negative'
console.log(posNeg(12));
