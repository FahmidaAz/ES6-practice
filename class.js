class Student{

    constructor(sName, sId){
        this.name = sName;
        this.id = sId;
        this.school = "Preparatory";
    }
}

const student1 = new Student("Shoily", 41);
const student2 = new Student("Rafa", 39);

console.log(student1, student2);

console.log(student2.name);