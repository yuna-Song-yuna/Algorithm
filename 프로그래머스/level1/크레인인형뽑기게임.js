// 2019 카카오 개발자 겨울 인턴십

function solution(board, moves) {
    var answer = 0;
    var basket = []
    
    for(var k=0; k<moves.length; k++){
        for(var i=0; i<board.length; i++){
            var j = moves[k]-1;
            if(board[i][j]){
                basket.push(board[i][j])
                board[i][j] = 0
                break;
            }
        }
        if(basket.length>=2){
            if(basket[basket.length-2]==basket[basket.length-1]){
                basket.splice(basket.length-2)
                answer += 2
            }
        }
    }
   
    return answer;
}