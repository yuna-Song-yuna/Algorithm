function solution(x, n) {
    var answer = [];
    
    for(var i=x; answer.length<n; i=i+x){
        answer.push(i)
    }
    
    return answer;
}

// 다른 사람의 코드
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

//Array(n): length가 n인 배열을 생성
//fill(x): 배열을 x로 채움      //fill(값,start_index, 채울인덱스개수)
//map(v,i)  v는 배열의 값, i은 인덱스 값