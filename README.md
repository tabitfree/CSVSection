# 1webit application

**ReactTS** application that shows functionality of implemented React component - CSVSection

## CSVSection

The user get to choose which type of service he wants using CSVSection based on the estimated number of hours spent on each service. User can input hourly wage and see what budget he can prepare. He can then generate the CSV with the options chosen.

### CSV File INPUT (example: src/files/test.csv)

CSVSection is provided with 4 default columns.
Name (string), Basic Graphics(number of hours), Hard Graphics(number of hours), Advanced Graphics(number of hours)

```
Menu,3,6,12
Homepage,5,10,15
Contact,4,8,9
```

Please provide a CSV file with 4 columns showed as it is showed above.

**NOTE:** CSV values can be divided by:**,**, **|**, **;** - without spaces

### CSV File OUTPUT

CSV values on output will be divided with **,** and the CSV File will contain one more column - OTHER - just in case you choose the "others" value.
