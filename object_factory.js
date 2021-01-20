function Person(name, first, second, third){ //객체를 만든다.
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}

var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 10, 30, 40);

console.log(kim.sum());
console.log(lee.sum());

/*var lee = {
    name: 'kim',
    first:10,
    second:10,
    third:20,
    sum:function(){
        return this.first + this.second + this.third;
    }
} 하나하나 같은 방식으로 만들면 힘들다. */

var d1 = new Date('2021-1-18'); //객체를 찍어낸다.
console.log(d1.getFullYear());
console.log(d1.getMonth());

console.log(Date); // Date 내장함수



console.log(Person()); //default
console.log(new Person()); //객체를 생성하는 생성자가 된다. constructor
