//Database of questions
const QUESTIONS = [
  {
    text: "Who sang 'How do I live?'",
    choices: ["Mariah Carey", "Alanis Morissette", "LeAnn Rimes", "Madonna"],
    answer: 2,
    explanation: "This song was sung by LeAnn Rimes and was originally intended for release as a single for the 1997 action blockbuster Con Air soundtrack."
  },
  {
    text: "Who sang 'Un-Break My Heart?'",
    choices: ["Toni Braxton", "Sinead O'Connor", "Caline Dion", "Kurt Cobain"],
    answer: 0,
    explanation: "'Un-Break My Heart' sung by Toni Braxton attained commercial success worldwide. In the United States, the song reached number one on the Billboard Hot 100, where it stayed a total of eleven weeks"
  },
  {
    text: "Who sang 'Foolish Games/You Were Meant For Me?'",
    choices: ["Michael Jackson", "Jewel", "Beyonce", "Aaliyah"],
    answer: 1,
    explanation: "'You Were Meant for Me' is a folk-pop song written by Jewel and Steve Poltz and performed by Jewel on her first album"
  },
  {
    text: "Who sang '(Everything I Do) I Do It For You?'",
    choices: ["Jay-Z", "Gwen Stefani", "Tupac Shakur", "Bryan Adams"],
    answer: 3,
    explanation: "'(Everything I Do) I Do It for You' is a song by Canadian singer-songwriter Bryan Adams"
  },
  {
    text: "What band played 'Too Close?'",
    choices: ["Nirvana", "Red Hot Chili Peppers", "Next", "Pearl Jam"],
    answer: 2,
    explanation: "'Too Close' is a song by American R&B group Next. It also happens to be the worst song of all time."
  }

]
//Initial STORE
const STORE = {
  score: 0,
  currentQuestion: 0,
  currentView: 'Welcome',
  lastAnswer: false,
}

const VIEWS = {
  'Welcome': renderWelcomePage,
  'Question': renderQuestionPage,
  'Feedback': renderFeedbackPage,
  'results': renderResultsPage
}

function renderWelcomePage() {
  console.log("Welcome is being rendered")
  $("main").append(
    `<section class="welcome">
        <form class="welcome-form">
          <h2>Quiz your 90's knowledge</h2>
          <input type="submit" value="Start the quiz!">
        </form>
      </section>`
  )
}
function renderQuestionPage() {
  console.log("Questions is being rendered")
  $(".question").append(
    `<h2>${QUESTIONS[STORE.currentQuestion].text}</h2>
          <input type="radio" name="possible-answer">
          <label>${QUESTIONS[STORE.currentQuestion].choices[0]}</label>
          <input type="radio" name="possible-answer">
          <label>${QUESTIONS[STORE.currentQuestion].choices[1]}</label>
          <input type="radio" name="possible-answer">
          <label>${QUESTIONS[STORE.currentQuestion].choices[2]}</label>
          <input type="radio" name="possible-answer">
          <label>${QUESTIONS[STORE.currentQuestion].choices[3]}</label>
          <input class="submit-answer" type="button" value="Submit Answer">`
          //------------------------------------------------
  )
}
function renderFeedbackPage() {
  console.log("Feedback is being rendered")

}
function renderResultsPage() {
  console.log("Results is being rendered")

}
//CANT FIGURE OUT HOW TO PROPERLY TARGET THE SUBMIT-ANSWER BUTTON---------------------------------
//User answer choice
$(".question-form").on("submit", function () {
  console.log("answer submitted")
  event.preventDefault();
});
//
/*
VIEWS[STORE.currentView]()
*/

//Template generators
function generateAnswerList(answers) {

}
//Render functions
function renderNextPage() {
  console.log("rendering next page")
  VIEWS[STORE.currentView]()

}
//Event handlers
function handleAnswerSubmitted() {
  //Retrieve answer identifier of user-checked radio button
  //Perform check: User answer === Correct answer
  //update STORE and render appropriate section
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


/*
<main>
  <div class='quiz-container'>
    <section class='score'></section>
    <section class='question-number'></div>
    <div class='question-container'></div>
  </div>
</main>

main.html(renderQuizContainer())

updateQuestionData() {
  STORE.currentQuestion += 1;
  //
}
*/
