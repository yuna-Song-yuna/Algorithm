function solution(x) {
    var num = x.toString().split("").reduce((acc, cur) => parseInt(acc)+parseInt(cur))
    return (x%num != 0)?false:true
}