# Health Records API

> Personal health knowledge for a user

## Description

> Returns health records for yourself and can give you recommendations for proper health

# Endpoints

> /records

``` Python 
records = {
    "_id": 1,
    "name": "peanut allergy",
    "category": "allergy",
    "symptoms": "rash"
},
{
    "_id": 2,
    "name": "asthma",
    "category": "lung conditions",
    "symptoms": "shortness of breath, weezing"
}
...
```

> /records/category

# Returns the categories of conditions

``` Python

{ 
    "condition": "Asthma",
    "fact": "information on condition"
    ...
}
```

> /records/category/allergy

# Returns list of allergies

``` Python

{
    "category": "allergy",
    "name": "certain allergy:
    ...
}
```






