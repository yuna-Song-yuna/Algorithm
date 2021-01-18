function solution(s, n) {
    var answer = '';
    var ascii = []
    
    for(var i=0; i<s.length; i++){
        ascii.push(s.charCodeAt(i))
    }
    
    ascii = ascii.map((item) => {
        return item<92?(item==32?(item):(item+n>=91?(item+n-26):(item+n))):(item==32?(item):(item+n>=123?(item+n-26):(item+n)))
    })
    
    answer = ascii.map(item => String.fromCharCode(item)).join("")
    
    
    return answer;
}

// 다른 사람의 풀이

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}