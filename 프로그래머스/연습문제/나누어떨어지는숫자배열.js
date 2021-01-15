function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter((d)=>{
        return d%divisor == 0
    }).sort((a,b)=>a-b)
    
    if(answer.length == 0){
        answer.push(-1)
    }
    
    return answer;
}

// 내 코드와 똑같지만 정리 version
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}