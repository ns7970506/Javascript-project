let restart = document.getElementById("restart")
let timeLeft = document.querySelector(".time-left")
let nextButton = document.getElementById("next-button")
let displayContainer = document.getElementById("display-container")
let quizContainer = document.getElementById("container")
let scoreContainer = document.querySelector(".score-container")
let userScore = document.getElementById("user-score")
let countOfQuestion = document.querySelector(".number-of-question")
let startButton = document.getElementById("start-button")
let startScreen = document.querySelector(".start-screen")
let questionCount
let scoreCount =0;
let count =11;
let countdown;


const quizArray = [
    {
        id:"0",
        question:"Which is the most widely spoken language in the world?",
        options: ["Spanish","Mandarin","English","German"],
        correct: "Mandarin"
    },
    {
        id:"1",
        question: "Which is the only continent in the world without a desert ?",
        options: ["North America","Asia","Africa","Europe"],
        correct: "Europe"
    },
    {
        id:"2",
        question: "Who invented Computer ?",
        options : ["Charles Babbage","Henry Luce","Henry Babbage","Charles Luce"],
        correct: "Charles Babbage"
    }
];
// Restart Quiz
   restart.addEventListener("click",()=>{
     initial()
     displayContainer.classList.remove("hide")
     scoreContainer.classList.add("hide")
   })
   const timerDisplay = ()=>{
    countdown = setInterval(()=>{
        count--;
        timeLeft.innerHTML=`${count}`
        if(count==0){
            clearInterval(countdown)
            displayNext();
        }
        },1000);
   };
   // next question
   nextButton.addEventListener("click",(displayNext=()=>{
    // increment question count
    questionCount+=1;
    // if last question
    if(questionCount == quizArray.length){
        // hide question container and display score container
        displayContainer.classList.add("hide")
        scoreContainer.classList.remove("hide")
        userScore.innerHTML = "Your score is " +scoreCount+ "Out of " +questionCount;
    }
    else {
        // display questioncount
        countOfQuestion.innerHTML = questionCount + 1 + "of" + quizArray.length + "questions"
        quizDisplay(questionCount)
        count=11
        clearInterval(countdown)
        timerDisplay();
}
})
);

   // display quiz
   const quizDisplay = (questionCount)=>{
    let quizCard = document.querySelectorAll(".container-mid");
 
    // hide other card
    quizCard.forEach((card)=>{
        card.classList.add("hide")
        // display current card
    quizCard[questionCount].classList.remove("hide")
    })
}

   // Quiz creation
   function quizCreator(){
    // randomly sort questions
    quizArray.sort(() => Math.random() -  0.5);
    // generate quiz
    for (let i of quizArray){
        // randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        // quiz card creations
        let div = document.createElement("div")
        div.classList.add("container-mid","hide")
        countOfQuestion.innerHTML = 1 + "of" + quizArray.length + "Question"
        // insert question
        let question_div = document.createElement("p")
        question_div.classList.add("question");
        question_div.innerHTML=i.question;
        div.appendChild(question_div)
        // options
       div.innerHTML +=`
       <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>` 
       quizContainer.appendChild(div)
    }
   }

   // checker function to check if options is correct or not
   function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div")
    //if user click correct options
    if(userSolution == quizArray[questionCount].correct){
        userOption.classList.add("correct")
        scoreCount++
    }
    else{
        userOption.classList.add("incorrect")
        // for marking the correct options
        options.forEach((element)=>{
            if(element.innerText == quizArray[questionCount].correct){
                element.classList.add("correct")
            }
        })
    }
   

   // clearInterval(stop timer)
    clearInterval(countdown);
     options.forEach((element) => {
    element.disabled = true;
  });
}

   // Initial setup
   function initial (){
    quizContainer.innerHTML =""
    questionCount =0 
    scoreCount =0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
   }
// when user click start button
startButton.addEventListener("click",()=>{
    startScreen.classList.add("hide")
    displayContainer.classList.remove("hide")
    initial()
});
//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
