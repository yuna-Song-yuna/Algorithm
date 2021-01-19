function solution(s) {
    var answer = '';
    var word = s.split('')
    
    for(var i=0; i<word.length; i++){
        if(word[i]==' '){
            answer += ' '
            word.splice(0,i+1);
            i = -1;
            continue;
            
            //if(word.length==0) break;
        }
        if(i%2 == 0){
            answer += word[i].toUpperCase();
        }else{
            answer += word[i].toLowerCase();
        }
    }
    return answer;
}

// 다른 사람의 코드
function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }