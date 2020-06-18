def add(a,b) :
    return a + b

def sub(a,b) :
    return a - b

def maxBlock(word):
    max_count=0
    count=1
    for i in range (0, len(word)):
        if word[i]==word[i+1]:
            count+=1
        else:
            if count>max_count:
                max_count=count
            count=1
    return max_count
