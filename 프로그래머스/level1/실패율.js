// 2019 KAKAO BLIND RECRUITMENT

function solution(N, stages) {
    var answer = [];
    var fail = [];
    var now = [];
    var result = [];
    var fail_count = 0;
    var now_count = 0;
    
    for(var i=0; i<N; i++){
        stages.map(num =>{
            if(num==i+1) fail_count += 1;
            if(num>=i+1) now_count += 1;
        })
        fail.push(fail_count);
        now.push(now_count);
        fail_count = 0;
        now_count = 0;
        result.push({fail:fail[i]/now[i],stage:i+1})
    }
    
    result.sort((a,b)=>b.fail-a.fail).map(n=>answer.push(n.stage))
    
    return answer;
}