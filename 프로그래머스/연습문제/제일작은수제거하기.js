function solution(arr) {
    var temp = arr[0]
    
    if(arr.length == 1) arr.splice(0,1,-1)
    else{
        for(var i=1; i<arr.length; i++){
            if(temp > arr[i]) temp=arr[i]
        }

        arr.splice(arr.indexOf(temp),1)
        }
    return arr;
}