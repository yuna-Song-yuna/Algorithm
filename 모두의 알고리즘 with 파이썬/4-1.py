# 1부터 n까지의 합 구하기를 재귀 호출로 만들어 보세요

def sum(n):
    if n<=1:
        return 1
    return n + sum(n-1)
    #print(n+sum(n-1))
print(sum(10))