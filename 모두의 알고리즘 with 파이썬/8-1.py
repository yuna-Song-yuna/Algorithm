# 일반적인 선택정렬 알고리즘을 사용하여 리스트를 오름차순 정렬
# 책에는 변수를 하나 선언해서 중간다리로 사용했는데 굳이 그럴 필요 못느껴서 다이렉트로 값 바꿔버림(line 7)
def ex(a):
    for i in range(0, len(a)-1):
        for j in range(i+1, len(a)):
            if a[i] > a[j]:
                a[i], a[j] = a[j], a[i]
    print(a)

ex([2,4,1,3,5])
