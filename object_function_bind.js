// 객체와 함수와의 관계

var kim = {name : 'kim', first : 10, second : 20}
var lee = {name : 'lee', first : 30, second : 20}

function sum() {
    return this.first + this.second; 
}

//내부적으로 사용하는 this를 고정값으로 만드는 것을 bind라고 한다.
var kimSum = sum.bind(kim, '->'); //함수 인자 설정이 가능하다.
console.log(kimSum());


//bind는 실행되는 함수의 this 값을 원하는 객체로 고정시켜서 사용. (새로운 함수를 만들어낸다.)
//call은 실행되는 함수의 this 값을 원하는 객체로 바꾸어서 사용. (기존 함수를 불러낸다.)


