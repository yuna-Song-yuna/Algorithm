function solution(a, b) {
    var answer = '';
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var day = ['THU','FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    var count = 0
    
    for(var i=0; i<a-1; i++){
         count += month[i]
     }
    count += b
    
    answer = day[count%7]
    
    return answer;
}