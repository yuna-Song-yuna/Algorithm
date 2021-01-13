// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수 리턴
// 숫자로 처리하는게 더 빠르다고 함

function solution(n) {
    var answer = 0;
    var answer_list = []
    
    answer_list = n.toString().split('')
    answer_list = answer_list.sort((a,b)=>b-a).join('')
    
    answer = parseInt(answer_list)
    
    return answer;
}

// 다른 사람이 숫자로 구현한 코드
function solution2(n){
var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)
    return nums.sort((a,b)=>b-a).join('')*1;
}

console.log(solution2(3466))