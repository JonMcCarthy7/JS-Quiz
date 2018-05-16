(function() {
  function Question(question, answers, correct) {
    (this.question = question),
      (this.answers = answers),
      (this.correct = correct);
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let index = 0; index < this.answers.length; index++) {
      console.log(index + ": " + this.answers[index]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct Answer");
      sc = callback(true);
    } else {
      console.log("InCorrect Answer");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your Current Score is: " + score);
    console.log("----------------------------");
  };

  var q1 = new Question(
    "What is a great programming language?",
    ["Ruby", "JavaScript", "PHP"],
    1
  );

  var q2 = new Question("Programming is: ", ["Fun", "Boring", "Tedious"], 0);

  var questions = [q1, q2];

  function score() {
    var sc = 0;
    return function(corrent) {
      if (corrent) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
