// Run by Node.js

// 모든 팀과 경기할 수 있는 경우의 수 구하기
// => 정답: 6팀참가 시 1+2+3+4+5

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.on("line", function(line) {

	var answer = 0
	for(var i=1; i<line; i++){
		answer += i
	}
	console.log(answer)
	
	rl.close();
}).on("close", function() {
	process.exit();
});