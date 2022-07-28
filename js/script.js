alert("Welcome to the test to work!")

var firstName = prompt("What is your name?", "Ibrohim").trim();
var lastName = prompt("What is your surname?", "Qudratov").trim();
var age = prompt("How old are you?", "15").trim();
var proffesion = prompt("Who do you work?", "Programming Specialist").trim();
var home = prompt("Where do you live?", "Tashkent").trim();

console.log(`Answers:
${firstName}
${lastName}
${age}
${proffesion}
${home}
`);

var balls = prompt("How much did you gain?");

var minBalls = 70;

if (balls >= minBalls) {
  alert("You are accepted!");
} else {
  alert("Don't be discouraged, you will be able to next time! ;)")
}

alert("Thanks!")