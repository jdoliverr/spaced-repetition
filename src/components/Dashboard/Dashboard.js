import React, { Component } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import languageService from "../../services/language-service";

export default class Dashboard extends Component {
  static contextType = DashboardContext;
  componentDidMount() {
    this.context.clearError();
    languageService
      .getWords()
      .then((data) => this.context.setLanguageWords(data.words));
    //     .catch(this.context.setError);
    languageService
      .getHead()
      .then(this.context.setHead)
      .catch(this.context.setError);
  }
  renderHead() {
    const { head = {} } = this.context;
    return <div>{head}</div>;
  }
  renderWords() {
    const { languageWords = [] } = this.context;
    return [
      languageWords.map((word, i) => (
        <li className="word-container" key={`word$ {i}`}>
          <h3>{word.original}</h3>
          <div className="word-specifics-details"></div>
          <p className="answer-count">{`Times Correct: ${word.correct_count}`}</p>
          <p className="answer-count">{`Times Inorrect: ${word.incorrect_count}`}</p>
        </li>
      )),
    ];
  }

  render() {
    console.log(this.renderWords());
    const { error } = this.context;
    return (
      <>
        <section className="Dashboard">
          <h2>Dashboard</h2>
          {error ? (
            <p className="error-text">Something went wrong, please try again</p>
          ) : (
            this.renderWords()
          )}
        </section>
      </>
    );
  }
}
