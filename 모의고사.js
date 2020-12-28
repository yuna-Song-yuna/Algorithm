function solution(answers) {
    var answer = [];
    var j = 0;
    var i = 0;
    var num1 = [1,2,3,4,5]
    var num2 = [2,1,2,3,2,4,2,5]
    var num3 = [3,3,1,1,2,2,4,4,5,5]
    var num1_answer = 0;
    var num2_answer = 0;
    var num3_answer = 0;
    
    for(i=0; i<=answers.length; i++){
        if(answers[i] == num1[j]){
            num1_answer += 1;
        }
        if(j == 5){
            j = 0;
        }else{
            j++
        }
    //console.log(num1_answer)
    }
    
   for(i=0; i<=answers.length; i++){
    if(answers[i] == num2[j]){
        num2_answer += 1;
    }
    if(j == 7){
        j = 0;
    }else{
        j++
    }
    console.log(num2_answer)
    }
   
    for(i=0; i<=answers.length; i++){
    if(answers[i] == num3[j]){
        num3_answer += 1;
    }
    if(j == 9){
        j = 0;
    }else{
        j++
    }
    console.log(num3_answer)
    }
    
    
    return answer;
}

//이건 아닌 것 같다