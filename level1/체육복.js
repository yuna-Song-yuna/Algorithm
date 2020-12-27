function solution(n, lost, reserve) {
    var i = 0;
  
  //여분을 갖고 있는 학생이 도난당했을 경우 빌려주지 못함
  //=>lost와 reserve리스트에서 겹치는 학생을 삭제
    var lost_filter = lost.filter(function(a){
        return reserve.indexOf(a) === -1;
    })
    var reserve_filter = reserve.filter(function(a){
        return lost.indexOf(a) === -1;
    })
    //여분이 있는 학생을 오름차순으로 정렬
    reserve_filter.sort((a,b)=>a-b)

  	//현재 answer(체육수업 들을 수 있는 학생 수): 전체학생(n)-잃어버린학생(lost_filter)
    var answer = n-lost_filter.length;
  
  //여분이 있는 학생이 자신의 앞번호 먼저 탐색하고 빌려줌 => 뒷번호 탐색하고 빌려줌
  //=>answer(체육수업 들을 수 있는 학생 수)+1
    while(i<reserve_filter.length){
        if(lost_filter.indexOf(reserve_filter[i]-1) !== -1){
            lost.splice(lost_filter.indexOf(reserve_filter[i]-1),1)
            answer += 1;
            console.log('-1','i:',i,'lost:',lost,'answer:',answer)
            i++;
        }else if(lost_filter.indexOf(reserve_filter[i]+1) !== -1){
            lost_filter.splice(lost_filter.indexOf(reserve_filter[i]+1),1)
            answer += 1;
            console.log('+1','i:',i,'lost:',lost,'answer:',answer)
            i++;
        }else{
            i++
        }
    }
    return answer;
}