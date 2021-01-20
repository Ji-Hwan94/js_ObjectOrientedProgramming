var superObj = {superVal:'super'}

var subObj = Object.create(superObj);
subObj.superVal = "sub";

console.log('subObj.subVal ==> ', subObj.superVal);         
console.log('superObj.superVal ==> ', superObj.superVal);

var kim = {
    name :'kim',
    first:10, second:20,
    sum: function() {return this.first +this.second}
}

/*
1) Object.create 방법
var lee = Object.create(kim)
lee.name = 'lee';
lee.first = 20;
lee.second = 30; //Object.create()를 통해 상속을 받는다.


2) __proto__방법
var lee = {
    name :'lee',
    first:20, second:30
} //sum 함수를 추가하지 않았다.
lee.__proto__ = kim; //proto를 통해 상속 받는다.
console.log(lee.sum());
*/
