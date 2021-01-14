function solution(s) {
    var answer = '';
    
    if(s.length%2 == 0){
        answer = s.substring(s.length/2-1,s.length/2+1)
        console.log(s.length/2)
    }else{
        answer = s.substring(s.length/2,s.length/2+1)
    }
    
    return answer;
}


//같은 원리지만 수정한 코드
function solution2(s){
    var answer = '';
    var len = s.length
        answer = len%2==0?s.substring(len/2-1,len/2+1):s.substring(len/2,len/2+1)
    
    return answer;
}

//다른 사람의 코드

function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}