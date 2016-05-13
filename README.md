
# getConstructor v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Returns the constructor of a given value.

```coffee
getConstructor = require "getConstructor"

getConstructor 0                    # => Number

getConstructor []                   # => Array

# SPECIAL CASES #

getConstructor undefined            # => undefined

getConstructor null                 # => undefined

getConstructor NaN                  # => undefined

getConstructor Object.create(null)  # => undefined
```
