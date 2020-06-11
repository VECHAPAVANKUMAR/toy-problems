import unittest
from operations import *

class Testing(unittest.TestCase) :
    def test_add(self) :
        self.assertTrue(add(1,2), 3)
        self.asserTrue(add(2,3), 4)
    def test_sub(self) :
        self.asserTrue(sub(1,2), 1)
        
if __name__=="__main__" :
    unittest.main()