// 완전탐색
function solution(answers) {
    var answer = [];
    var num1 = [1,2,3,4,5]              //수포자1 패턴
    var num2 = [2,1,2,3,2,4,2,5]        //수포자2 패턴 
    var num3 = [3,3,1,1,2,2,4,4,5,5]    //수포자3 패턴
    var count = [0,0,0]
    
    for(var i=0; i<answers.length; i++){    //답 대조 => 맞은 답 개수 카운트
        if(num1[i%5] == answers[i]){
            count[0]++;
        }
        if(num2[i%8] == answers[i]){
             count[1]++;
         }
        if(num3[i%10] == answers[i]){
            count[2]++;
        }
    }
    
    var index
    index = Math.max(count[0], count[1], count[2])  //가장 많이 맞춘 개수 반환
    
    for(var i=0; i<count.length; i++){      //가장 많이 맞춘 개수가 위치한 배열 번호 반환(=수포자 번호) 후 answer에 push
        if(count[i] == index){
            answer.push(i+1)
        }
    }
    
    return answer;
}