 
//implent questions and answer as an array of objects
//each Q/A object contains a question, four answers in an array,
//and a number which tells the correct answer


var Q1 = {
    question: 'How many teeth do cats have?',
    answers: ['18', '42', '30', '36'],
    correctAnswer: 2,
}
var Q2 = {
    question: 'Creme Puff, the oldest cat ever, was how old when she died?',
    answers: ['22', '25', '31', '38'],
    correctAnswer: 3,
}
var Q3 = {
    question: 'What is the name for a group of cats?',
    answers: ['Coven', 'Clowder', 'Caravan', 'Carnival'],
    correctAnswer: 1,
}
var Q4 = {
    question: 'The first cat show occured in what year?',
    answers: ['Approximately 1000 B.C', '1798', '1871', '1905'],
    correctAnswer: 2,
}
var Q4 = {
    question: 'The average cat sleeps for what fraction of the day?',
    answers: ['2/3', '4/5', '1/2', '1/4'],
    correctAnswer: 0,
}

var questionList = [Q1, Q2, Q3, Q4]
var timeLeft;
var myInterval;
const timeGiven = 15;
const timeAnswer =3;
var questionNum = 0;
var wrongs = 0;
var rights = 0;
var currentQuestion;



//Screen updater should change the question, answers, and
//and the correct number answer
function screenUpdater(QAobject) {
    $('#question').text(QAobject.question);
    $('#answer0').text(QAobject.answers[0]);
    $('#answer1').text(QAobject.answers[1]);
    $('#answer2').text(QAobject.answers[2]);
    $('#answer3').text(QAobject.answers[3]);
}
//should evalute the player's answer
function answerEval(guess) {
    //is correct
    if(guess==currentQuestion.correctAnswer){
        rights++;
    }



}
//changes the screen to show the answer
function answerScreen(answerIsCorrect){
    $("#maincontent").hide();
    $("#answercontainer").show();
    if(answerIsCorrect==true){
        $("#yesno").text("You are correct!")
    }
    else{
        $("yesno").text("Sorry, that's the wrong answer!")
        
    }

}
//counts down and prints the time left
var timeDecrease = function () {
    timeLeft--;
    $("#timeleft").text("Time left: " + timeLeft)
}
//sets a new timer to count down from 15, and clear old timer
function timerSet(timeAmount) {
    timeLeft = timeAmount;
    clearInterval(myInterval);
    myInterval = setInterval(timeDecrease, 1000)
}
//starts off with the currentquestion 
function startQuestion(){
    $("#startcontainer").hide();
    $("#maincontent").show();
    timerSet(timeGiven);
    currentQuestion=questionList[questionNum];
    screenUpdater(currentQuestion);
}
//reset function
function reset(){
    wins=0;
    losses=0;
    questionNum=0;
    $("#startcontainer").show();
    $("#maincontent").hide();
    $("#answercontainer").hide();
}


//main function
window.onload = function () {
    reset();
    
    
    // //onclick events for each answer
    $("#answer0").on("click", function () { answerEval(0) });
    $("#answer1").on("click", function () { answerEval(1) });
    $("#answer2").on("click", function () { answerEval(2) });
    $("#answer3").on("click", function () { answerEval(3) });
    $("#startbutton").on("click", function () { startQuestion() });
}

//need a function to siwtch between the question screen and the 
//reset screen