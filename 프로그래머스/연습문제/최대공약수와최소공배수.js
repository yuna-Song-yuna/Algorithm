function solution(n, m) {
    var answer = [];
    var i = Math.min(n,m)
    
    while(true){
        if(n%i==0 && m%i==0){
            answer.push(i)
            break;
        }
        i--;
        
    }
    
    answer.push(n*m/answer[0])
    
    return answer;
}