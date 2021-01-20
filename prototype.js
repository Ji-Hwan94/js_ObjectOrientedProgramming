function Person(name, first, second){ //객체를 return 한다, 객체의 초기상태를 설정
    this.name = name;
    this.first = first;
    this.second = second;  
}

//같은 객체들이 공통적으로 사용하는 속성을 만든다. 
Person.prototype.sum = function(){
    return "prototype : " + (this.first + this.second );
} //성능절약, 메모리 절약

var kim = new Person("kim", 10, 20); //new => 객체를 리턴한다.
kim.sum = function(){
    return "this : " + (this.first * this.second );
} //kim의 함수만 다르게 작동하게 하는 경우 
  

var lee = new Person("lee", 10, 30);
//여러개의 객체가 하나의 prototyle을 공유한다. => 메모리 절약


console.log(kim.sum());
// this를 사용하여, kim이라는 객체안에 sum의 함수가 있는지 찾는다.

console.log(lee.sum());
//lee라는 객체에 sum의 함수가 없기 때문에, prototype에서 sum의 함수를 찾는다.






