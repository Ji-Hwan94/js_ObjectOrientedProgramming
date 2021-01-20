console.log(Math.PI)
console.log(Math.random()); //객체를 포함해서 함수를 만들때, 이를 Method라고 부른다.
console.log(Math.floor(3.9));

var MyMath = { //객체를 만드는 방법
    PI: Math.PI, 
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log(MyMath.floor(3.2));

