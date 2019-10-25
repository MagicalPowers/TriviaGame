// i will create a trivia form with multiple choice or true/false options (your choice).
//     the player will have a limited amount of time to finish the quiz. 
//     the game ends when the time tuns out. the page will reveal the number of questions that players answer correctly and incorrectly.
//     dont let the player pick more than one answer per question.
//     dont forget to include a countdown timer. 

//     make a multi-question, multiple choice trivia-stlye game. 
//     With a timer that will "close" the trivia test. 
//     And a (DONE) button that will do exactly the same function as the timer.
//     radio button
//     dynamically code with jQuery

//     link to repo || github page link || portfolio w/ link link>>>>>


//i know i need some objects containing questions

//this is stolen from w3schools.com
//this is a thing, a function that will alert, after sixty seconds, some sort of message to the user
//eventually this should run a function that "The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly." but i wouldnt bet on that outcome.

//okay, let's take a step back. 
//just watched a video, first result on youtube?, anyway this guy basically lays out exactly what one 'should' do to create a radio button quiz. for reference: https://www.youtube.com/watch?v=qio50ujL2nA
// anyway, all of this follows me watching that^ and thus should reflect that.

var global1 = ["What is the first answer?"];
var global2 = ["<input onclick=XXX1() name=eins type=radio />2<br /><input onclick=XXXX1() name=eins type=radio />4<br />"];

var global3 = ["What is the first answer?"];
var global4 = ["<input onclick=XXX2() name=zwei type=radio />2<br /><input onclick=XXXX2() name=zwei type=radio />4<br />"];

var global5 = ["What is the first answer?"];
var global6 = ["<input onclick=XXX3() name=drei type=radio />2<br /><input onclick=XXXX3() name=drei type=radio />4<br />"];

var global7 = ["What is the first answer?"];
var global8 = ["<input onclick=XXX4() name=vier type=radio />2<br /><input onclick=XXXX4() name=vier type=radio />4<br />"];

var global9 = ["What is the first answer?"];
var global10 = ["<input onclick=XXX5() name=funf type=radio />2<br /><input onclick=XXXX5() name=funf type=radio />4<br />"];

var global11 = ["What is the first answer?"];
var global12 = ["<input onclick=XXX6() name=sechs type=radio />2<br /><input onclick=XXXX6() name=sechs type=radio />4<br />"];

var global13 = ["What is the first answer?"];
var global14 = ["<input onclick=XXX7() name=sieben type=radio />2<br /><input onclick=XXXX7() name=sieben type=radio />4<br />"];

var global15 = ["What is the first answer?"];
var global16 = ["<input onclick=XXX8() name=acht type=radio />2<br /><input onclick=XXXX8() name=acht type=radio />4<br />"];

var global17 = ["What is the first answer?"];
var global18 = ["<input onclick=XXX9() name=neun type=radio />2<br /><input onclick=XXXX9() name=neun type=radio />4<br />"];

var global19 = ["What is the first answer?"];
var global20 = ["<input onclick=XXX10() name=zehn type=radio />2<br /><input onclick=XXXX10() name=zehn type=radio />4<br />"];

var global21;
var global22;
var global23;
var global24;
var global25;

//now, a function, which i think should load the first question-answer set
window.onload = function () {
  global21 = 0;
  
}



function myFunction() {
    setTimeout(function(){ alert("somesort of message to the user"); }, 60000);
  }

