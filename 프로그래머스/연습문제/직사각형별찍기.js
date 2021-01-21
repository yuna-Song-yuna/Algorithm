process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //console.log(a);
    //console.log(b);
    
    var star='';
    
    for(var i=0; i<a; i++){
        star += "*"
    }
    for(var j=0; j<b; j++){
        console.log(star);
    }
});

// 다른 사람의 코드
// repeat()사용!!
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});