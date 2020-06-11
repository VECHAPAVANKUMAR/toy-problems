import unittest
from operations import *

class TestCases(unittest.TestCase) :
    assertTrue(add(1,2), 3)
    assertFalse(add(2,3), 4)

if __name__=="__main__" :
    unittest.main()