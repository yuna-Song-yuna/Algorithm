function solution(n) {
    var answer = '';

    for(var i=1; i<=n; i++){
        answer = i%2==0?answer+='박':answer+='수'
    }

    return answer;
}