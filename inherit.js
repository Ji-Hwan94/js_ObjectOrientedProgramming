class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return "prototype : " + (this.first + this.second );
    }
}

class PersonPlus extends Person{ //상속하는 과정
    avg(){
        return (this.first + this.second)/2; 
    }
}


var kim = new PersonPlus("kim", 30, 20);
console.log(kim.avg());



