class LRU :

    def __init__(self, cache_capacity) :
        
        self._cache_capacity_ = cache_capacity
        self._cache_ = {}
        self._freq_count_ = {}


