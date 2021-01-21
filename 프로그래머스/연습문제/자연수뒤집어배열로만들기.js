function solution(n) {
    var answer = [];
    n = ""+n
    answer = n.split("")
    answer = answer.map(n => parseInt(n)).reverse()
    return answer;
}

// 다른 사람의 풀이 (숫자)
function solution2(n){
var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}