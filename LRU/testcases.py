import unittest
from operations import *

class Testing(unittest.TestCase) :
    def test_add(self) :
        self.assertTrue(add(1,2), 3)
        self.assertTrue(add(2,3), 6)
        
if __name__=="__main__" :
    unittest.main()