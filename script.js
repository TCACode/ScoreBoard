// Set counter default to zero
var counter = 0
var counter2 = 0
// Display total Home
$("#counter").text(counter);

// When button is clicked
$("#one").click(function(){
  //+1 Home
  counter = counter + 01;
// hOME
	// Display total
	$("#counter").text(counter);
});


//+3 Home
$("#three").click(function(){
  counter = counter + 03;
  $("#counter").text(counter);
});


// +6 Home
$("#six").click(function(){
  counter = counter + 06;
  $("#counter").text(counter);
});

//-1
$("#sub1").click(function(){
  counter = counter - 01;
  $("#counter").text(counter);
});

//-3
$("#sub3").click(function(){
  counter = counter - 03;
  $("#counter").text(counter);
});

//-6
$("#sub6").click(function(){
  counter = counter - 06;
  $("#counter").text(counter);
});

// Reset Home
$("#reset1").click(function(){
  counter = 0;
  $("#counter").text(counter);
});

// Display total Away
$("#counter2").text(counter);

// When button is clicked
$("#uno").click(function(){
  //+1 Away
  counter2 = counter2 + 01;
	// Display total
	$("#counter2").text(counter2);
});

$("#does").click(function(){
  //=+3 away
  counter2 = counter2 + 03;
	// Display total
	$("#counter2").text(counter2);
});

//add six away
$("#tre").click(function(){
  //=+3 away
  counter2 = counter2 + 06;
	// Display total
	$("#counter2").text(counter2);
});

//-1 away
$("#sub01").click(function(){
  //=+3 away
  counter2 = counter2 - 01;
	// Display total
	$("#counter2").text(counter2);
});

//-6 away
$("#sub03").click(function(){
  //=+3 away
  counter2 = counter2 - 03;
	// Display total
	$("#counter2").text(counter2);
});

//-6 away
$("#sub06").click(function(){
  //=+3 away
  counter2 = counter2 - 06;
	// Display total
	$("#counter2").text(counter2);
});

// Reset Away
$("#reset2").click(function(){
  counter2 = 0;
  $("#counter2").text(counter2);
});


$("#add2").click(function(){
  //Add 10 to counter
  counter = counter + 20;
	// Display total
	$("#counter").text(counter);
});


// Reset
$("#reset2").click(function(){
  counter = 0;
  $("#counter").text(counter);
});
/*
JAVASCRIPT NOTES & THINGS I LEARNED
- How to display a variable's value on the screen
- How to increment / decrement
- How to reset the counter to zero manually
- How to reset the counter automatically if it's greater than 100
- Spent some time exploring the getDate methods to create a clock.
- jQuery / JS Synstax
	- It's not ".cliked" it's ".click"
  - .text displays the variable's value; .html seems to add content into the div (?); .append just adds the counter to the end of the string instead of replacing it.
  - You only need to define the variable once; var counter = 0, var counter = counter + 10; doesn't work. 
  - I'm not sure how the code structure changes if I use a global vs. local varaible. ie. how does the function syntax change? 
  - This solves everything: http://www.webdesignerwall.com/wp-content/uploads/2008/02/jquery-how-it-works.gif
 

NEXT TIME!
- How would you refactor the actions into one function? ie. if this button is pressed, add 10, else that button subtracts 10? 

*/