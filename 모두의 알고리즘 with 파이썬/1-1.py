def double_sum(n):
    result = 0
    for i in range(1, n+1):
        result += i*i
    return result

print(double_sum(10))
