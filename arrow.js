function doubleIt(num){
    return num*2;
}

const result = doubleIt(200);
console.log(result);

const trippleIt = function(num){
     return num*3; 
}

const  result2 = trippleIt(7);
console.log(result2);

const tripple = number => number*3;
const result3 = tripple(12);
console.log(result3);


const add = (x,y) => x+y;
const result4 = add(10,20);
console.log(result4);

const noReturn = () => console.log("Hi there!!");
const result5 = noReturn();

const complicate = (num1, num2) =>{
    const sum = num1 + num2;
    const diff = num1-num2;
    const result = sum * diff;

    return result;
}
const result6 = complicate(12,10);
console.log(result6);