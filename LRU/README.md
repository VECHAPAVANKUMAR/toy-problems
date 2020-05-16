In this I am going to build LRU cache, which is an efficient cache data structure.
LRU stands for Least Recently Used.

The concept of LRU Cache is that whenever cache becomes full we will remove an item that is least used.

To achieve this I am going to implement LRU cahe using two dictionaries one dictionary holds uri as key and 
data related to that uri as value.
Another dictionary acts a frequency count in where uri is key and number of times that particular key is 
accessed is value.

This LRU data structure mainly consists of three methods. They are :
 1. put : This method accepts file name as key and a list as value. The list contains data and zero as it is placed into cache for the first time. So, frequency count of that file is zero.
 2. get : This method is used to retrieve the data based on the file name that is passed as key.
 3. get_cache : This method returns enire cache.

