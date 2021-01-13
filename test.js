var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.reduce(function(pre, value){
    pre.push(value.length);
    return pre;
}, []);


function sw(num){
switch(num%2){
    case 0:
        console.log('짝수')
    case 1:
        console.log('홀수')
}
}
sw(3)

