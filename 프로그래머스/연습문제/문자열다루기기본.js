// 조건1: 문자열 길이가 4와 6이어야 함
// 조건2: 숫자로만 구성되어 있어야 함
// 조건3: 입력은 문자열 형태로 들어옴

function solution(s) {
    var answer = false;
    
    if(parseInt(s) && (s.length ==4 || s.length == 6)){
        if(s.length == parseInt(s).toString().length)
            answer = true;
    }
    
    return answer;
}

// if(s.length == parseInt(s).toString().length) 이 부분은
// if(s == parseInt(s)) 로 표현해도 같음