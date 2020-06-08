from LRU import *
import os

def main() :

    lru_object = LRU(5)

    assert (lru_object.get("1")) == None

    for file in os.listdir() :
        if file.startswith("file") :
            data = open(file, "r").read()
            lru_object.put(file, data)

    assert(lru_object.get("file1.txt")) == "This is First file."
    assert(lru_object.get("file2.txt")) == "This is Second file."
    assert(lru_object.get("file3.txt")) == "This is Third file."
    assert(lru_object.get("file4.txt")) == "This is Fourth file."
    assert(lru_object.get("file5.txt")) == "This is Fifth file."
    lru_object.put("1",2) 
    assert(lru_object.get("file1.txt")) == None
    lru_object.put("2",3)
    assert(sorted(lru_object.get_cache())) == ['2', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']
    lru_object.put("3",4) 
    assert(lru_object.get("1")) == None
    assert(lru_object.get("2")) == None
    assert(sorted(lru_object.get_cache())) == ['3', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']
    print ("All Testcases Passed!")
                                                                          
if __name__=="__main__":
    main() 
                             