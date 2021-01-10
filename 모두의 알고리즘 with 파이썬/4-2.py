# 문제 2의 숫자 n개 중에서 최댓값 찾기를 재귀 호출로 만들어 보세요
def max(a, n):
    result=0
    if n == 0:
        return result
    if a[n-1] > result:
        result = a[n-1]
    n -= 1
    max(a, n-1)
a = [1,2,3,4,5]
print(max(a, len(a)))

