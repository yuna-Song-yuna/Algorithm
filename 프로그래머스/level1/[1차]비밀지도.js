// 2018 KAKAO BLIND RECRUITMENT

function solution(n, arr1, arr2) {
    var answer = [];
    var temp = ""
    
    arr1 = arr1.map(d=>d.toString(2))
    arr2 = arr2.map(d=>d.toString(2))
    
    for(var i=0; i<arr1.length; i++){
        for(var j=1; j<=n; j++){
            if(arr1[i][arr1[i].length-j] == 1 || arr2[i][arr2[i].length-j] == 1) temp += "#"
            else temp += " ";
        }
        answer.push(temp.split("").reverse().join(""))
        temp = ""
    }
    
    return answer;
}

// 다른 사람의 코드
// 비트연산자 | 사용!
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))