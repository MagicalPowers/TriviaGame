//     create a trivia form with multiple choice or true/false options.
//     the player will have a limited amount of time, the game ends when the time tuns out. the page will reveal the questions answered correctly.
//     dont let the player pick more than one answer per question.
//     dont forget to include a countdown timer.
//     And a (DONE) button that will do exactly the same function as the timer.
//     radio buttons, dynamically code with jQuery

//i know i need some objects containing questions

var global1 = ["What is the first answer?"];
var global2 = [
  "<input onclick=XXX1() name=eins type=radio />2<br /><input onclick=XXXX1() name=eins type=radio />4<br />",
];

var global3 = ["What is the first answer?"];
var global4 = [
  "<input onclick=XXX2() name=zwei type=radio />2<br /><input onclick=XXXX2() name=zwei type=radio />4<br />",
];

var global5 = ["What is the first answer?"];
var global6 = [
  "<input onclick=XXX3() name=drei type=radio />2<br /><input onclick=XXXX3() name=drei type=radio />4<br />",
];

var global7 = ["What is the first answer?"];
var global8 = [
  "<input onclick=XXX4() name=vier type=radio />2<br /><input onclick=XXXX4() name=vier type=radio />4<br />",
];

var global9 = ["What is the first answer?"];
var global10 = [
  "<input onclick=XXX5() name=funf type=radio />2<br /><input onclick=XXXX5() name=funf type=radio />4<br />",
];

var global11 = ["What is the first answer?"];
var global12 = [
  "<input onclick=XXX6() name=sechs type=radio />2<br /><input onclick=XXXX6() name=sechs type=radio />4<br />",
];

var global13 = ["What is the first answer?"];
var global14 = [
  "<input onclick=XXX7() name=sieben type=radio />2<br /><input onclick=XXXX7() name=sieben type=radio />4<br />",
];

var global15 = ["What is the first answer?"];
var global16 = [
  "<input onclick=XXX8() name=acht type=radio />2<br /><input onclick=XXXX8() name=acht type=radio />4<br />",
];

var global17 = ["What is the first answer?"];
var global18 = [
  "<input onclick=XXX9() name=neun type=radio />2<br /><input onclick=XXXX9() name=neun type=radio />4<br />",
];

var global19 = ["What is the second answer?"];
var global20 = [
  "<input onclick=XXX10() name=zehn type=radio />2<br /><input onclick=XXXX10() name=zehn type=radio />4<br />",
];

var global21;
var global22;
var global23;
var global24;
var global25;

//now, a function, which i think should load the first question-answer set
window.onload = function () {
  global21 = 0;
  //yeah, these should set the HTML of these elements to the first set of questions/answers
  question1.innerHTML = global1;
  option1.innerHTML = global2;
  //and this should load a button to the 'submit' element, and run an on-click function. labeled Proceed
  submit.innerHTML = "<button onclick=functionA()>Proceed</button>";
};
//this will be the submit button function
function functionA() {
  //establish a base score of zero, so we dont get any NaN
  global22 = 0;
  //load the next set
  question1.innerHTML = global3;
  option1.innerHTML = global4;
  // now for some sort of sumbit button action
  submit.innerHTML = "<button onclick=functionB()>Proceed</button>";
}
//this is a function that should run when a correct answer is chosen
//using a variable for score storage
function function1() {
  //ill set a hard number as the score, rather than use a global21++, because I don't want wanton score manipulation.
  global21 = 1;
}
//this is a function that should run when an incorrect answer is chosen
function function2() {
  global21 = 0;
}

function myFunction() {
  setTimeout(function () {
    alert("somesort of message to the user");
  }, 60000);
}
