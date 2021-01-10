function solution(array, commands) {
    var answer = [];
        for(var i=0; i<=commands.length-1; i++){
        var array1 = array.slice(commands[i][0]-1,commands[i][1])
        array1.sort((a,b)=>a-b)
        var a =commands[i][2]-1
        answer.push(array1[a])
    }
    return answer;
}