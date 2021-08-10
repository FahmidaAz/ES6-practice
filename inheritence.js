class Parent{
    constructor(){
       this.father = 'Jamal';
    }
}

class Child extends Parent{
   
    constructor(name){
        super();
       this.name = name;
       
    }
     getFullName(){
        return this.name +" "+this.father;
    }
}


const baby = new Child("Halim");
console.log(baby.getFullName());
const baby2 = new Child('Akter');
console.log(baby2.getFullName());

