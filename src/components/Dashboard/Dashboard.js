import React, { Component } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import languageService from "../../services/language-service";

export default class Dashboard extends Component {
  static contextType = DashboardContext;
  componentDidMount() {
    this.context.clearError();
    languageService
      .getWords()
      .then(this.context.setLanguageWords)
      .catch(this.context.setError);
    languageService
      .getLanguage()
      .then(this.context.setLanguage)
      .catch(this.context.setError);
  }
  renderLanguage() {
    const { language = {} } = this.context;
    return <div>{language}</div>;
  }
  renderWords() {
    const { languageWords = [] } = this.context;
    return languageWords.map((word) => <text>{word}</text>);
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <section className="Dashboard">
          <h2>Dashboard</h2>
          {error ? (
            <p className="error-text">Something went wrong, please try again</p>
          ) : (
            (this.renderLanguage(), this.renderWords())
          )}
        </section>
      </>
    );
  }
}
