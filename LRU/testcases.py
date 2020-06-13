import unittest
from operations import *

class Testing(unittest.TestCase) :
    def test_add(self) :
        self.assertEqual(add(1,2), 3) 
        self.assertEqual(add(2,3), 5)
        
if __name__=="__main__" :
    unittest.main()