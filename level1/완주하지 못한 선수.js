function solution(participant, completion) {
    var answer = '';
   participant.sort();
   completion.sort();
   var i=0;
   for(i=0; i<=completion.length; i++){
       if(participant[i]!=completion[i]){
           answer = participant[i];
           break;
       }
   }
   return answer;
}