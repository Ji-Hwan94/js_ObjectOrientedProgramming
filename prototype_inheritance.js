//클레스 내 뿐만 아니라 다른 Object 끼리도 상속관계를 만들수 있다. js에서만 가능
var superObj = {superVal:'super'}
var subObj = {subVal:'sub'} 

subObj.__proto__ = superObj; //subObj가 superObj의 자식이 되는것.
console.log('subObj.subVal ==> ', subObj.subVal);
console.log('subObj.subVal ==> ', subObj.superVal); //subObj에서 superVal이라는 키가 없기 때문에 부모 객체에서 superVal를 찾는다.
subObj.superVal = 'sub';
console.log('superObj.superVal ==> ', superObj.superVal);//__proto__는 subObj의 객체 값만 바꿨을뿐 superObj라는 객체 자체를 바꾸지 못한다.
