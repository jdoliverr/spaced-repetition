import React, { Component } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import languageService from "../../services/language-service";
import './Dashboard.css';

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
        <li className="word-container" key={`word ${i}`}>
          <h4>{word.original}</h4>
          <div className="word-specifics-details"></div>
          <p className="answer-count">{`correct answer count: ${word.correct_count}`}</p>
          <p className="answer-count">{`incorrect answer count: ${word.incorrect_count}`}</p>
        </li>
      )),
    ];
  }

  render() {
    const { error, totalScore } = this.context;
    console.log(totalScore)    
    return (
      <>
        <section className="Dashboard">
          <h2>Dashboard</h2>
          <h2>Test language 1</h2>
          <section>Total correct answers:7</section>
          <a className="learn-route-link" href="/learn">
            Get to practicing!
          </a>
          {error ? (
            <p className="error-text">Something went wrong, please try again</p>
          ) : (
            <ul>
            {this.renderWords()}
            </ul>
          )}
        </section>
      </>
    );
  }
}
