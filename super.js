//super : 부모 class가 할수 있는 일을 하게하고, 할 수 없는 일을 자식 class가 하는 것.

class Person{
    constructor(name, first, second) { //first와 second의 인자만 있는 부모 class       
        this.name = name;
        this.first = first;
        this.second = second;
    } 
    sum = function () {
        return this.first + this.second;
    }
    avg(){
        return (this.first + this.second)/2; 
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    } 
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        return ((super.avg() * 2) + this.third)/3;
    }
    
}


var kim = new PersonPlus("kim", 30, 20, 50);

console.log(kim.sum());
console.log(kim.avg());



