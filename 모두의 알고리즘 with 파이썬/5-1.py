# 재귀 호출을 이용한 피보나치 수열 구하기
def fibonacci(n):
    if 1 >= n:      #index[0]=0, index[1]=1 인 것을 이렇게 표현..간단...
        return n
    return fibonacci(n-2)+fibonacci(n-1)

print(fibonacci(7))
