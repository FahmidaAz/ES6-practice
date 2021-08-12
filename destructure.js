const person = {name: 'Jack william', age:89, job:"facebooker", phone:'098998998999', friends: ['rony','kini','ini','mini'], gf:"Emma"};

const {job, gf, age,salary} = person;
console.log(job);

console.log(gf, age,salary, job);
// console.log(person.friends);

const friends = ["Rony","Tony","Mony","Ashraful","Delu"];
const [chotoFrnd,boroFrnd, ...restFrnd] = friends;

console.log(restFrnd);
console.log(chotoFrnd);
console.log(boroFrnd);