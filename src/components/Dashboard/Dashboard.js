import React, { Component } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import languageService from "../../services/language-service";
import "./Dashboard.css";
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  static contextType = DashboardContext;
  componentDidMount() {
    this.context.clearError();
    languageService.getWords().then((data) => {
      this.context.setLanguageWords(data.words);
      this.context.setLanguage(data.language);
    });
    //     .catch(this.context.setError);
    languageService
      .getHead()
      .then(this.context.setHead)
      .catch(this.context.setError);
  }
  renderHead() {
    const { language = {} } = this.context;
    return <h2 className="sub-head">{language.name}</h2>;
  }
  renderWords() {
    const { languageWords = [] } = this.context;
    return [
      languageWords.map((word, i) => (
        <li className="word-container" key={`word ${i}`}>
          <h4 className="dash-word">{word.original}</h4>
          <div className="word-specifics-details"></div>
          <p className="answer-count">{`correct answer count: ${word.correct_count}`}</p>
          <p className="answer-count">{`incorrect answer count: ${word.incorrect_count}`}</p>
        </li>
      )),
    ];
  }

  render() {
    const { error, language } = this.context;
    return (
      <>
        <section className="Dashboard">
          <h2 className="sub-head">Dashboard</h2>
          {this.renderHead()}
          <section className="total-score">Total correct answers: {language.total_score}</section>
          <button className="start-button">
            <Link className="learn-route-link" to="/learn">
            Get to practicing!
            </Link>
          </button>
          {error ? (
            <p className="error-text">Something went wrong, please try again</p>
          ) : (
            <ul>{this.renderWords()}</ul>
          )}
        </section>
      </>
    );
  }
}
