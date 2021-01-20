class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    } //객체가 생성되는 과정에서 함수가 실행되어짐
}


var kim = new Person("kim", 30, 20);
console.log(kim);




/*kim.sum = function(){
    return "this : " + (this.first * this.second );
} 
var lee = new Person("lee", 10, 30);*/