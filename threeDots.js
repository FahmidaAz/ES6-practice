const ages = [12,22,23,11,14,26];
const ages2 = [45,65,44,34,25,67];
const ages3 = [88,67,56,65,90];
const allAges = ages.concat(ages2).concat([7]).concat(ages3);
const allAges2 = [...ages,...ages2,7,...ages3];
console.log(allAges2);


// get element from array through ... dots

const businessMan = 300;
const minister = 200;
const mayor = 150;

const array  = [300,200,150,600,240,50,3000,450];
const result = Math.max(...array);
console.log(result);