// 입력받은 문자열을 ASCII코드로 변환하여 출력하기
// Javascript에 해당 기능을 해주는 함수가 있음
// .charCodeAt([index번호]): 문자열=>ASCII
// String.fromCharCode([값]): ASCII=>문자열

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(line.charCodeAt());
	rl.close();
}).on("close", function() {
	process.exit();
});