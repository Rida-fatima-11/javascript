var num1 = 4
var num2 = 4


var aftercalculated = num1+num2 ;
document.write("sum of "+ num1 + "and"+num2+"is"+ aftercalculated+"</br>")

var aftercalculated = num1-num2 ;
document.write("sub of "+ num1 + "and"+num2+"is"+ aftercalculated+"</br>")

var aftercalculated = num1*num2 ;
document.write("mul of "+ num1 + "and"+num2+"is"+ aftercalculated+"</br>")

var aftercalculated = num1/num2 ;
document.write("div of "+ num1 + "and"+num2+"is"+ aftercalculated+"</br>")

var aftercalculated = num1%num2 ;
document.write("mod of "+ num1 + "and"+num2+"is"+ aftercalculated+"</br>")

//  num3

var number;
document.write("value after variable declaration is:" + number +"</br>")

var num1 = 5;
document.write("initial value :" + num1 + "</br>")

document.write("value after iecrement is:"+ ++num1 +"</br>")

num1= num1 +7;
document.write("value after addition is :"+ num1 + "</br>")

document.write("value after decrement is: "+--num1 +"</br>")

num1= num1%3;
document.write("the reainder is:"+ num1 + "</br>")

// num4

var  percostofticket = 600;
var numoftickets = 5;
var totalcost =(percostofticket * numoftickets);
document.write("total cost to buy"+ numoftickets+"tickets to a movie is"+ totalcost +"pkR");


// num5

document.write("<h2>" + "Table Of 3" + "</h2>");

var tablenam = 3;
var count = 1;
var inc = 1;
document.write(
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"+
    tablenam + "x" + count++ +"=" + tablenam*inc++ + "</br>"
)
// num6
document.write("<h2>" + "Conversion Formulae:" + "</h2>")

var Celsius = 30
var Fahrenheit = 71

var foundCelsius =  (Fahrenheit - 32) * 5/9
var foundFahrenheit = (Celsius * 9/5) + 32

document.write(Celsius + "C" + "is" + foundFahrenheit + "F" + "</br>" );
document.write(Fahrenheit + "F" + "is" + foundCelsius + "C" + "</br>" + "</br>");


// Number 7.

document.write("<h1>" + "shopping cart" + "</h1>");

var Product1 = "Price of item 1";
var Product2 = "Price of item 2";
var orderd1 = "Ordered quantity of item 1";
var orderd2 ="Ordered Quantity of item 2";
var orderdshipping = "Shipping charges";

var total = (650*3 + 100*7 + 100);

document.write(Product1 + "is" + 650 + "</br>" + orderd1 + "is" + 2 + "</br>" + "is" + Product2 + "is" + 100 + "</br>" + orderd2 + "is" + 7+ "</br>" + orderdshipping + "is" + 100 + "</br>" + "</br>" + "Total cost of your order" + "is" + total);


// Number 8.

document.write("<h1>" + "Mark Sheet" + "</h1>");

var student1;
var student2;
var totalmarks = 980;
var marksObtained = 804;
var percentage = marksObtained/totalmarks*100;

document.write("Total marks:" + totalmarks + "<br>" + "Mark otained:" + marksObtained + "<br>" + "Percentage:" + percentage + "</br>");


// Number 9.


var USdollars = 10;
var SaudiRiyals = 25;
var totalCurrency = (10*104.80 + 25*28);

document.write("<h1>" +"Currency in PKR" +"</h1>"  +"Total Currency in PKR:" + totalCurrency );

// Number 10.

var num1 = 5;
document.write( num1 + 5 + "</br>" + num1*10 + "</br>" + num1/2);

// Number 11.

var currentYear = 2024;
var brithYear = 2003;
var myAge = 21;

document.write("<h1>" + "Age Calculator:" + "</h1>" + "Current Year:" + currentYear + "<br>" + "Brith Year:" + brithYear + "<br>" + "My Age:" + myAge);


// Number 12.


document.write("<h1>" + "The Geometrizer:" + "</h1>");

var radius = 20;
var circumference = (2*3.142*radius);
var area = (3.142*radius**2);

document.write("Radius of a circle :" + radius + "</br>" + "The circumference is:" + circumference + "</br>" + "The area is:" + area);

// Number 13.


document.write("<h1>" + "The Lifetime Supply Calculator:" + "</h1>");


var favoriteSnack = "cheetos";
var currentage = 15;
var estimatedMaximum = 65;
var amountofSnack = 3;

var total = 65*3 - 3*15;

document.write("Favorite Snack:" + favoriteSnack + "</br>" + "Current Age:" + currentage + "</br>" + "Estimated Maximum:" + estimatedMaximum + "</br>" + "Amount of Snack:" + amountofSnack + "</br>" + "You will need" + total + "" + favoriteSnack + "to last you until the ripe old age of" + estimatedMaximum);
