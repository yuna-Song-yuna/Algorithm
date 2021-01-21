function solution(phone_number) {
    var answer = '';
    
    for(var i=0; i<phone_number.length-4; i++){
        answer += "*"
    }
    
    answer += phone_number.substring(phone_number.length-4)
    
    return answer;
}

// 다른 사람의 코드 => repeat()사용
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
  }