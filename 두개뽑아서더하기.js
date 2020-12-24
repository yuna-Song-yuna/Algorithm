function solution(numbers) {
    var answer = [];
    for(var a=0; a<numbers.length;a++)
        {
            for(var b=a+1; b<numbers.length;b++){
               if(answer.indexOf(numbers[a]+numbers[b]) === -1){
                      answer.push(numbers[a]+numbers[b]);
               }   
            }
        }
    return answer.sort((a,b)=>{return a-b});
}