function solution(a, b) {
    var answer = 0;
    var list = [a, b].sort((a,b)=>a-b)
    
    for(var i=list[0]; i<=list[1]; i++){
        answer += i
    }
    
    return answer;
}

//가우스 공식 활용 => 시간복잡도 O(n)
function adder(a, b){
    var result = 0

    return (a+b)*(Math.abs(b-a)+1)/2;
}

//Math 메소드 활용
function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
  }