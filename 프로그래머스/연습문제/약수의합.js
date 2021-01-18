function solution(n) {
    var answer = 0;
    var aliquot = []
    
    for(var i=1; i*i<=n; i++){
        if(n%i==0){
            aliquot.push(i, n/i)
        }
    }
    
    var sqrt = Math.sqrt(n)
    if(Number.isInteger(sqrt) == true) aliquot.splice(aliquot.indexOf(sqrt), 1)
    
    aliquot.map(num => answer += num)
    
    return answer;
}