def min_num(a):
    num = a[0]
    for i in range(0, len(a)):
        if num > a[i]:
            num = a[i]
    return num


print(min_num([1,2,3,4,5]))