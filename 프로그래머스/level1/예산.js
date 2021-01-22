// Summer/Winter Coding(~2018)

function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b)
    d.map(c=>{
        if(budget-c >=0) {
            answer++;
            budget -= c
        }
    })
    return answer;
}