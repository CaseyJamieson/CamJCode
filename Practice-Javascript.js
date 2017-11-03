
// Says Hello, World
alert ("Hello, World");

// Asks you your name
var person = "";
person = prompt ("Please enter your name.");
var length = person.length;

// Tells you how many characters are in your name
alert ("Hi, " + person + "!");
alert ("The name " + person + " is " + length + " characters long.");

// Shouts out your name (says it in CAPS)
alert("I'll shout it out:");
alert(person.toUpperCase());

// Says your name in lower case
alert("Now in lower case:");
alert(person.toLowerCase());

// Tells you where the first 'a' is in your name and if there is one
alert("The first 'a' is at letter...");
alert(person.indexOf("a"));

// Tells you the first three letters of your name
alert("The first three letters are...");
alert(person.substring(0,3));

// Does the sum - 3+5
var x = 5;
var y = 3;
var sum = x + y;

// Tells you the answer
alert (x + " plus " + y + " equals " + sum);

// Asks you to enter a number
var number = prompt ("Please enter a number");
var number1 = prompt ("Please enter a number");

// Times' your numbers together
alert ("I'll times those together");
alert (number*number1);

// Adds your numbers together
alert ("I'll add those together");
alert (parseInt(number)+parseInt(number1));

// Divides your numbers
alert ("I'll divide those");
alert (parseInt(number)/parseInt(number1));

// Subtracts one of your numbers from the other
alert ("I'll take those away from each other");
alert (parseInt(number)-parseInt(number1));

// Generates a random numbar
var number3 = Math.random();
alert (number3);

// Times' the randomely generated number by 6
var biggerNumber = number3 * 6;
alert (biggerNumber);

// Rounds the number up
var die = Math.ceil (biggerNumber);
alert (die);

// Gives a random number
var die = Math.ceil (Math.random() * 6);
alert (die);
if (die == 2) {
	alert ("You got a 2! You WIN!"); // If you get the number 2 then you win
}	else {
	alert ("It's only a " +die+ "."); // If you get any number other than 2 then you lose
}	

// Counts to 10
for (lap = 1; lap <= 10; lap++) {
	alert ("Going up! " + lap + ".");
}	

// Continuously asks you 3+2 until you get it right
answer = "10";
while (answer != "5") {
	answer = prompt ("What is 3+ 2?");
	if (answer == "5") {
		alert ("Great!"); // Congratulates you if you get 5
	} else {	  alert ("Try again..."); // Tells you to try again if you don't get 5
	}
}	

// Global variable
var globalVar = "I'm global!";

// Local variable
function myFunction() {
	var localVar = "I'm local!";
	console.log (localVar);
}	

myFunction();

// Creating an empty array
var genre = new Array(5);

// Storing data in the array
genre[0] = "flight simulation";
genre[1] = "first-person shooters";
genre[2] = "driving";
genre[3] = "action";
genre[4] = "strategy";

// Returning data from the array
alert ("I like " + genre[4] + " games.");

// List of all the games I like
var gameList = new Array ("Endless Legends", "Batman", "Civilization 5", "CS:GO", "Portal Knights", "Minecraft", 
	"Grand Theft Auto 5", "Skyrim", "Warface", "Far Cry Primal");

// Adds writting to the list
var text = "";
for (i = 0; i < gameList.length; i++) {
	text += "I love " + gameList[i] + "\n";
}	
alert (text); // Shows the list on the webpage

// Start of city menu
// Gives the cities distances from each other
distance = new Array {
	new Array (0, 648, 6476, 4000),
	new Array (648, 0, 6760, 3470),
	new Array (6476, 6760, 0, 3470),
	new Array (4000, 3470, 5956, 0),
};		
var theCity = ""; //Will hold the city number
	
// List of cities with their number	
car cityMenu = "Please choose a city by typing a number: \n";
cityMenu += "0) Indianapolis \n";
cityMenu += "1) New York \n";
cityMenu += "2) Tokyo \n";
cityMenu += "3) London \n";

// Shows the city menu
theCity = prompt (cityMenu);
return theCity;
} // End getCity

// Works out the distance between cities
function main() {
	var output = "";
	var from = getCity ();
	var to = getCity();
	var result = distance[from][to];
	output = "The distance from " + cityName[from];
	output += " to " + cityName[to];
	output += " is " + result + " miles.";  // Tells you the answer in a sentence
}
main()
// End of city menu	
	
