class Numbers:
    def __init__(self, list):
        self.list = list
        
    def sum(self):
        sum = 0
        for x in self.list:
            sum +=x
        print(sum)
        
    def product(self):
        result = 1
        for x in self.list:
            result = result * x 
        print(result)
        
    def min(self):
        print(min(self.list))
        
    def max(self):
        print(max(self.list))
    
p = Numbers([2,4,58,41,30,102,59,63])
p.sum()
p.product()
p.min()
p.max()