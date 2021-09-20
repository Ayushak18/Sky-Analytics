# API based on greenhouse gas emission data of 43 countries 

## This API contains data of different countries from 1990 - 2014

## Tech Stack 

JavaScript

NodeJS

ExpressJS

MongoDB Atlas

Git 

Github

Heroku

MongooseJS

## Live Heroku Link

```
https://sky-analytics.herokuapp.com
```

## Routes :-

"/ "- index route will display all the countries with their data in json format
```
Example 
https://sky-analytics.herokuapp.com

```

“country/id” - if we provide the id of any country it will only display the data of the country with all the years as an object.

```
Example - 
https://sky-analytics.herokuapp.com/country/614471015dc9673ffee04166
```

“country/id/?year=” - along with the id we can also pass a year query which will display the data of the particular country and the year you entered.

```
Example 
https://sky-analytics.herokuapp.com/country/614471015dc9673ffee04166/?year=2010
```

