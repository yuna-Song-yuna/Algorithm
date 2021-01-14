function solution(s) {
    var answer = '';
    var temp = []
    
    //split('')을 사용하면 for문을 돌리지 않아도 됨..
    for(var i=0; i<s.length; i++){
        temp.push(s[i])
    }
    answer = temp.sort().reverse().join('')
    
    return answer;
}