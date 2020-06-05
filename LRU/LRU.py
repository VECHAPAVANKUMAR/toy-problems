class LRU :

    def __init__(self, cache_capacity) :
        
        self._cache_capacity_ = cache_capacity
        self._cache_ = {}
        self._freq_count_ = {}


    def put(self, uri, data) :
        
        if uri not in self._cache_.keys() :

            if len (self._cache_) == self._cache_capacity_ :

                x = sorted(self._freq_count_.items(), key = lambda item : item[1])[0]

                key = x[0][:]

                del self._cache_[key]
                del self._freq_count_[key]

            self._cache_[uri] = data
            self._freq_count_[uri] = 0

    def get(self, uri) :

        try :

            self._freq_count_[uri] += 1
        
            return self._cache_[uri]

        except : 

            return None

    def get_cache(self) : 
        
        return self._cache_

        