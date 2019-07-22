//Database of questions
const QUESTIONS = [
  {
    text: "Who sang 'How do I live'?",
    choices: ["Mariah Carey", "Alanis Morissette", "LeAnn Rimes", "Madonna"],
    answer: 2,
    explanation: "This song was sung by LeAnn Rimes and was originally intended for release as a single for the 1997 action blockbuster Con Air soundtrack."
  },
  {
    text: "Who sang 'Un-Break My Heart'?",
    choices: ["Toni Braxton", "Sinead O'Connor", "Caline Dion", "Kurt Cobain"],
    answer: 0,
    explanation: "'Un-Break My Heart' sung by Toni Braxton attained commercial success worldwide. In the United States, the song reached number one on the Billboard Hot 100, where it stayed a total of eleven weeks."
  },
  {
    text: "Who sang 'Foolish Games/You Were Meant For Me'?",
    choices: ["Michael Jackson", "Jewel", "Beyonce", "Aaliyah"],
    answer: 1,
    explanation: "'You Were Meant for Me' is a folk-pop song written by Jewel and Steve Poltz and performed by Jewel on her first album."
  },
  {
    text: "Who sang '(Everything I Do) I Do It For You'?",
    choices: ["Jay-Z", "Gwen Stefani", "Tupac Shakur", "Bryan Adams"],
    answer: 3,
    explanation: "'(Everything I Do) I Do It for You' is a song by Canadian singer-songwriter Bryan Adams."
  },
  {
    text: "What band played 'Too Close'?",
    choices: ["Nirvana", "Red Hot Chili Peppers", "Next", "Pearl Jam"],
    answer: 2,
    explanation: "'Too Close' is a song by American R&B group Next. It also happens to be the worst song of all time."
  },
]
//Initial STORE
const STORE = {
  score: 0,
  currentQuestion: 0,
  currentView: 'Welcome',
  lastAnswer: false,
  radioValue: 0,
  response: "",
  numberOfQuestions: QUESTIONS.length,
  finalResponse: "",

}
//Container for Views
const VIEWS = {
  'Welcome': renderWelcomePage,
  'Question': renderQuestionPage,
  'Feedback': renderFeedbackPage,
  'Results': renderResultsPage
}
//Renders Welcome Page into DOM
function renderWelcomePage() {
  console.log("Welcome is being rendered")
  $("main").append(
    `<section title="welcome page" class="welcome">
        <form class="welcome-form">
          <h2>Quiz your 90's knowledge</h2>
          <input type="submit" title="start the quiz button" value="Start the quiz!">
        </form>
      </section>`
  )
}
//Renders Question Page into DOM
function renderQuestionPage() {
  console.log("Questions is being rendered")
  $(".question-form").append(
    `
    <span class="question-span">
    <span class="score-question-number">
    <span class="question-count">${STORE.currentQuestion}/${STORE.numberOfQuestions} questions answered</span>
        <span class="score">You've got ${STORE.score} correct</span>
        </span>
        <content title="question and possible answers" class="questions-answers">
        <fieldset>
        <legend>
    <h2>${QUESTIONS[STORE.currentQuestion].text}</h2>
    </legend>
    <label>${QUESTIONS[STORE.currentQuestion].choices[0]}</label>
          <span class="radio-container"> <input class="radio-input" title="radio selector for possible answer 1" type="radio" name="possible-answer" value="0"></span>
          <label>${QUESTIONS[STORE.currentQuestion].choices[1]}</label>
          <span class="radio-container"> <input class="radio-input" title="radio selector for possible answer 2" type="radio" name="possible-answer" value="1"></span>
          <label>${QUESTIONS[STORE.currentQuestion].choices[2]}</label>
          <span class="radio-container"> <input class="radio-input" title="radio selector for possible answer 3" type="radio" name="possible-answer" value="2"></span>
          <label>${QUESTIONS[STORE.currentQuestion].choices[3]}</label>
          <span class="radio-container"> <input class="radio-input" title="radio selector for possible answer 4" type="radio" name="possible-answer" value="3"></span>
          <span class="submit-button-wrapper">
          <button title="submit selected answer button" class="button" type="button">Submit</button>
          </fieldset>
          </content>
          </span>
          </span>
          `
  )
}
//Renders Feedback Page into DOM
function renderFeedbackPage() {
  console.log("Feedback is being rendered")
  $(".feedback-form").append(
    `
  <span class="feedback-span">
  <span class="score-question-number">
  <span class="question-count">${STORE.currentQuestion + 1}/5 questions answered</span>
  <span class="score">You've got ${STORE.score} correct</span>
  </span>
  <span class="response-explanation">
  <span class="response">${STORE.response}</span>
  <span class="explanation">${QUESTIONS[STORE.currentQuestion].explanation}</span>
  </span>
  <span class="next-question-wrapper">
  <button title="next question button" class="button" type="button">Next Question</button>
  </span>
  </span>
  `
  )
}
//Renders Results Page into DOM
function renderResultsPage() {
  console.log("Results is being rendered")
  $(".results-form").append(
    `
    <span class="results-span">
    <p>You got ${STORE.score} out of ${STORE.numberOfQuestions} correct!</p>
    <p>${STORE.finalResponse}<p>
    <button title="start over button" class="button" type="button">Start Over?</button>
    </span>
    `
  )

}

//Functionality for the start over button. This will start at the first question and reset all of the STORE values to their starting position.
$(".results-form").on("click", "button", function () {
  event.preventDefault()
  STORE.currentView = "Question"
  STORE.finalResponse = ""
  STORE.score = 0
  STORE.currentQuestion = 0
  $("span[class='results-span']").remove()
  renderNextPage()
})

//Handles capturing the users answer choicce
$(".question-form").on("click", "button", function () {
  event.preventDefault();
  STORE.radioValue = $("input[name='possible-answer']:checked").val()
  //console.log(radioValue)
  handleAnswerSubmitted()
  console.log("answer submitted")
});

//Handles next question button on the feedback form
$(".feedback-form").on("click", "button", function () {
  console.log("next question")
  event.preventDefault()
  STORE.currentView = "Question"
  $("span[class='feedback-span']").remove()
  STORE.currentQuestion = STORE.currentQuestion + 1
  renderNextPage()
})
//Handles the current view calls that activate the render pages-----------------------------possible
function renderNextPage() {
  if (STORE.currentQuestion < STORE.numberOfQuestions) {
    VIEWS[STORE.currentView]()
  }
  else{
    STORE.currentView = "Results"
    finalResponse()
    VIEWS[STORE.currentView]()
  }
}
//Generates a final response based on the users performance
function finalResponse() {
  if (STORE.score > 2) {
    STORE.finalResponse = "Wow, well aren't you hip!"
  }
  else {
    STORE.finalResponse = "Were you even born when these came out?"
  }
}
//Event handler for submiting an answer
function handleAnswerSubmitted() {
  console.log(STORE.radioValue, QUESTIONS[STORE.currentQuestion].answer)
  if (parseInt(STORE.radioValue) === QUESTIONS[STORE.currentQuestion].answer) {
    console.log("answered correctly")
    STORE.lastAnswer = true
    STORE.score = STORE.score + 1
  }
  else {
    console.log("answered incorrectly")
    STORE.lastAnswer = false
  }
  responseText()
  STORE.currentView = "Feedback"
  $("span[class='question-span']").remove()
  renderNextPage()

  //Retrieve answer identifier of user-checked radio button
  //Perform check: User answer === Correct answer
  //update STORE and render appropriate section
}
//Generated response text based on if the users answer is correct or not and places responses in the STORE
function responseText() {
  if (STORE.lastAnswer === true) {
    STORE.response = "You answered correctly!"
  }
  else {
    STORE.response = "You answered incorrectly!"
  }
}

// handleStartQuiz
// target the container holding the landing page and appends the first question html
function handleStartQuiz() {
  $(".welcome-form").on("submit", function (event) {
    event.preventDefault()
    console.log("quiz has started")
    STORE.currentView = "Question"
    $("section[class='welcome']").remove()
    renderNextPage()
  })
}


$(handleStartQuiz)