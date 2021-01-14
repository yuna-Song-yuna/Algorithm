//내 풀이
function solution(arr)
{
    var answer = [];

    for(var i=0; i<arr.length; i++){
      if(answer[answer.length-1] != arr[i]){ 
        answer.push(arr[i])
      }
    }
    
    return answer;
}

//다른 사람 풀이: filter를 사용할 수 있을 것 같았지만 감이 안왔음 근데 이렇게 풀 수 있었음
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}