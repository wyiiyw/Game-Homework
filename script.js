const startButton = document.getElementById('start-btn')
const startButton = document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startgame)
nextButton.addEventListener('click',()=>{
currentQuestionIndex++
setNextQuestion()
})

function startgame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions= question.sort(()=>Math.random()- .5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()

    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question 
    question.answers.foreach(answer=>{
        const button= document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct=answer.correct
        }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
 const selectedbutton=e.target
 const correct= selectedbutton.dataset.correct
 setStatusClass(document.body,correct)
 Array.from(answerButtonsElement.children).forEach(button=>{
     setStatusClass(button,button.dataset.correct)

 })
 if(shuffledQuestions.length>currentQuestionIndex+1){

  nextButton.classList.remove('hide')
 } else{
     startButton.innerText='Restart'
     startButton.classList.remove('hide')
 }
}
function setStatusClass(element,correct){
    clearstatusclass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearstatusclass(element){
    element.classList.remove('correct')
    element.classList.add('wrong')
}

const question =[
    {
        question:'what is 5 + 5?',
        answers: [
           { text:'10', conrrect:true},
           { text:'16', correct:false}
        ]


    }
]