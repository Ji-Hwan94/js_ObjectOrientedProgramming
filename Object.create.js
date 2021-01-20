//prototype inheritance와 같은 결과지만, 더 보편적으로 쓰이는것.
var superObj = {superVal:'super'}

var subObj = Object.create(superObj);
subObj.superVal = "sub";
debugger;
console.log('subObj.subVal ==> ', subObj.superVal); //subObj에서 superVal이라는 키가 없기 때문에 부모 객체에서 superVal를 찾는다.
console.log('superObj.superVal ==> ', superObj.superVal);//Objeect.create();는 subObj의 객체 값만 바꿨을뿐 superObj라는 객체 자체를 바꾸지 못한다.