# Time Stamp Micro Service

## What does it do?
This is a micro service that takes unix or normal time and returns a unix and normal time stamp back in json.

#### Examples:
##### Eample 1
http://localhost:3000/January%201,%202016

yeilds

```{"unix":1451635200000,"natural":"January 1, 2016"}```

##### Example 2
http://localhost:3000/1462935245

yeilds

```{"unix":1462935245,"natural":"May 11, 2016"}```
