import unittest
from operations import *

class Testing(unittest.TestCase) :
    def add(self) :
        self.assertTrue(add(1,2), 3)
        self.asserTrue(add(2,3), 4)

if __name__=="__main__" :
    unittest.main()