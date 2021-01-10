// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


var count = 0		//Bubble 정렬을 진행할 수(들)의 개수
var number = []	    //수

rl.on("line", function(line) {
	number.push(line)		    //입력값 number에 차례로 저장
	if(number.length >= 2){		//다 입력 받은 후 실행
		count = parseInt(number.splice(0,1))	//number[0]을 떼어서 숫자로 변환 후 count에 저장 (기존 number[0]은 삭제됨)
		number = number[0].split(" ")					//남은 number[0]값을 공백단위로 분리
		number = number.map(item => parseInt(item))		//number 배열 안의 값을 숫자로 변환

		var temp
		
        for(var i=0; i<count; i++){		//Bubble Sort 알고리즘
            for(var j=0; j<count-1-i; j++){
                if(number[j]>number[j+1]){
                    temp = number[j+1]
                    number[j+1] = number[j]
                    number[j] = temp
                }
            }
        }
		number = number.join(" ")		//배열 형태를 문자열 형태로 바꿔줌
		number = number + " "		//맨 끝에 공백이 들어가야 한다는 Q/A따라서 맨 끝에 공백추가 => 제출결과 1번만 통과
		
		rl.close();
	}

}).on("close", function() {
	console.log(number)
	process.exit();
});