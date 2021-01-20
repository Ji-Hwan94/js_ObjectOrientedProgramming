var memberArray = ['egoing', 'graphittie', 'leezhce'];

var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}


var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}


console.group('object loop');
for ( var name in memberObject ) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');

