def num(a):
    for i in range(0, len(a)-1):
        for j in range(i+1, len(a)):
            print(a[i],"-",a[j])
    
num(["Tom", "Jerry", "Mike"])