function solution(n) {
    var answer = 0;
    var before = []
    for(var i=0; i<=n; i++){	//입력받은 숫자까지 배열에 담아줌
        before.push(i)
    }
    for(var j=2; j*j<=n; j++){
        if(before[j]){		//해당 배열의 값이 0이 아니라면
            for(var k=j*j; k<=n; k+=j){		//j*j값부터 j만큼 증가시키면서 k위치의 값을 0으로 만듦
                before[k]=0;
            }
        }
    }
    before[1] = 0;
    
    answer = before.filter((c)=>c).length
    
    return answer;
}