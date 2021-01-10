# 하노이의 탑
def hanoi(n, start, to, aux):       #(원반 개수, 시작위치, 도착위치, 중간다리)
    if n == 1:
        return
    hanoi(n-1, start, aux, to)
    hanoi(n-1, aux, to, start)