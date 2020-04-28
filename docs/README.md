# Health Records API

> Personal health knowledge for a user

## Description

> Returns health records for yourself and can give you recommendations for proper health

# Endpoints

> /records

``` Python 
{
    "allergy": "List of allergies",
    "banana": "reason allergy exists",
},
{ 
    "conditions": "list of conditions",
    "Asthma": "Info on asthma"
},
...
```

> /records/conditions

# Returns list of conditions

``` Python

{ 
    "condition": "Asthma",
    "fact": "information on condition"
    ...
}
```

> /records/allergy

# Returns list of allergies

``` Python

{
    "allergy": "nuts",
    "fact": "information on allergy"
    ...
}

```






