var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.reduce(function(pre, value){
    pre.push(value.length);
    return pre;
}, []);
console.log(arr2)




