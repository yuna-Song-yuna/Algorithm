function solution(s){
    var answer = true;
    var p = []
    var y = []

    s.split("").map((n)=>{
        if(n=='p' || n=='P'){
            p.push(n)
        }
        if(n=='y' || n=='Y'){
            y.push(n)
        }
    })
    
    if(p.length != y.length){
        answer = false;
    }
    return answer;
}

// 다른 사람의 코드
function numPY(s){      //대,소문자 구분을 하지 않기 때문에 모두 대문자로 바꿔줌
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }