import React, { Component } from "react";
import languageService from "../../services/language-service";

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: { name: "", total_score: 0 },
      words: [],
      wordData: {
        word_id: null,
        nextWord: "",
        totalScore: 0,
        wordCorrectCount: 0,
        wordIncorrectCount: 0,
      },
      guess: "",
      toggled: false,
      nextWord: {},
    };
  }

  componentDidMount() {
    this.getWord();
  }

  setToggled = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  changeGuess = (e) => {
    this.setState({ guess: e.target.value });
  };

  sendUserGuess = (e, guess = this.state.guess) => {
    e.preventDefault();
    languageService
      .postUserGuess(guess)
      .then((nextWord) => this.setState({ nextWord: nextWord }));
    this.setToggled();
  };

  getWord = () => {
    languageService.getHead().then((res) => {
      const {
        word_id,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount,
      } = res;
      this.setState({
        guess: "",
        toggled: false,
        wordData: {
          word_id,
          nextWord,
          totalScore,
          wordCorrectCount,
          wordIncorrectCount,
        },
      });
    });
  };

  buttonClick = () => {
    this.setToggled();
    this.setState({ guess: "", wordData: this.state.nextWord });
  };

  render() {
    return (
      <section className="translate-word-page">
        <div className="translation-div">
          {this.state.toggled ? null : <h2>Translate the word:</h2>}
          <span>{this.state.wordData.nextWord}</span>
        </div>
        <div className="total-score"></div>
        {this.state.toggled ? (
          <>
            <main className="score-display DisplayScore" id="DisplayScore">
              <h2>
                {this.state.nextWord.isCorrect
                  ? "You were correct! :D"
                  : "Good try, but not quite right :("}
              </h2>
              <p>Your total score is: {this.state.nextWord.totalScore}</p>
            </main>
            <main className="translation-feedback DisplayFeedback">
              <p>
                {`The correct translation for ${this.state.wordData.nextWord} was ${this.state.nextWord.answer} and you chose ${this.state.guess}!`}
              </p>
              <button
                className="word-cycle-button"
                onClick={() => this.buttonClick()}
              >
                Try another word!
              </button>
            </main>
          </>
        ) : (
          <main>
            <p>
              Your total score is: {" "}
              {this.state.nextWord.totalScore
                ? this.state.nextWord.totalScore
                : this.state.wordData.totalScore}
            </p>
            <form
              className="answer-form"
              onSubmit={(e) => this.sendUserGuess(e)}
            >
              <label id="guess-label" htmlFor="learn-guess-input">
                What's the translation for this word?
              </label>
              <input
                id="learn-guess-input"
                type="text"
                required
                value={this.state.guess}
                onChange={(e) => this.changeGuess(e)}
              />
              <button className="submit-button" type="submit">
                Submit your answer
              </button>
            </form>
            <section className="user-tally">
              <p>
                You have answered this word correctly{" "}
                {this.state.wordData.wordCorrectCount} times.
              </p>
              <p>
                You have answered this word incorrectly{" "}
                {this.state.wordData.wordIncorrectCount} times.
              </p>
            </section>
          </main>
        )}
      </section>
    );
  }
}

export default LearningRoute;
