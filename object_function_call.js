// 객체와 함수와의 관계

var kim = {name : 'kim', first : 10, second : 20}
var lee = {name : 'lee', first : 30, second : 20}

function sum() {
    return this.first + this.second;
}
console.log(sum.call(kim)); //sum이라는 객체를 실행시킨다 = kim.sum();
console.log(sum.call(lee));

function avg(parameter) {
    return parameter + (this.first + this.second)/2;
}

console.log(avg.call(kim, '=>')); 
console.log(avg.call(lee, ':'));
//call() 함수의 첫번째는 어느 객체를 사용할것인지를 나타내고, 두번째 부터는 parameter를 나타낸다.


//bind는 실행되는 함수의 this 값을 원하는 객체로 고정시켜서 사용. (새로운 함수를 만들어낸다.)
//call은 실행되는 함수의 this 값을 원하는 객체로 바꾸어서 사용. (기존 함수를 불러낸다.)
