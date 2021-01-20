class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    } 
    /*sum(){
        return "prototype : " + (this.first + this.second );
    }*/   //함수 삽입 방법 1
}
/*Person.prototype.sum = function(){
    return "prototype : " + (this.first + this.second );
}*/       //함수 삽입 방법 2

var kim = new Person("kim", 30, 20);
kim.sum = function () {
    return this.first + this.second;
}
console.log(kim.sum());



