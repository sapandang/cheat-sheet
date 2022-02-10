# Pandas Library

> using jmeter jtl as input

# import
```
import pandas as pd
```

# Read Csv
```
df = pd.read_csv(FILENAME)
```

# Processing jmeter JTL
```python
FILENAME="../run1_30TH_30MIN.csv"

# 90th Percentile
def q90(x):
    return x.quantile(0.99,interpolation='nearest')

def not200(x):
    return x.where(x!=200).count()
    
aggq = {
    'responseCode':['count',not200],
    'elapsed':['min', 'max','mean',q90]
    }    
gk = df.groupby('label').agg(aggq)
gk.columns = gk.columns.droplevel(0) # removes top level column
print(gk)
print(gk.to_dict('index'))
print(gk.iloc[1])

```    
```
                            responseCode        elapsed <-- top level remove this to make dist gen easy                    
                                   count not200     min   max         mean   q90
label                                                                           
285 /app/authentication WEB           30      1     524   639   570.400000   639
authenticate web                      30      0     524   639   570.400000   639
get_pickup_eventsV2                37506      0      16  2834  1439.512451  1922
```
