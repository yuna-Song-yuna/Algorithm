function solution(n) {
    
    var root = Math.sqrt(n)
    if(Number.isInteger(root)) return (root+1)*(root+1)
    else return -1
    
}

//if대신 이항연산자로도 가능. 계속 쓰는버릇해야 안잊어버리고 쓸 듯