function solution(num) {
    var answer = 0;
    var what = 0
    
    for(var i=0; i<=500; i++){
        if(num == 1){
            answer = i
            break;
        }
        
        what = num%2
        if(what == 0){
            num = num/2
        }else{
            num = (num*3)+1
        }
        
        if(i==500){
            answer = -1
        }
    }
    
    return answer;
}