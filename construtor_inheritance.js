//생성자 호출 방식으로 값을 구하기

function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second); //Person 함수를 부른다.
    this.third = third;
}
//PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype); //Person.prototype의 객체를 __proto__로 하는 새로운 객체가 만들어진다.
//여기 까지만 하게되면, kim의 constructor function이 Person이다.

PersonPlus.prototype.constructor = PersonPlus; //kim의 constructor function이 다시 PersonPlus로 돌아온다.

PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

var kim = new PersonPlus('kim', 20, 30, 10);
console.log(kim.sum());
console.log(kim.avg());
console.log(kim.constructor); 
console.log(PersonPlus.prototype);