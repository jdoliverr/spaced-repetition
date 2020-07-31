import React, { Component } from "react";
import DashboardContext from "../../contexts/DashboardContext";
import Dashboard from "../../components/Dashboard/Dashboard";

class DashboardRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {},
      languageWords: [],
      numberCorrect: {},
      numberIncorrect: {},
      totalScore: {},
      error: null,
    };
  }

  setLanguage = (language) => {
    this.setState({ language });
  };

  setLanguageWords = (languageWords) => {
    this.setState({ languageWords });
  };

  setNumberCorrect = (numberCorrect) => {
    this.setState({ numberCorrect });
  };

  setNumberIncorrect = (numberIncorrect) => {
    this.setState({ numberIncorrect });
  };

  setTotalScore = (totalScore) => {
    this.setState({ totalScore });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };
  render() {
    const value = {
      language: this.state.language,
      languageWords: this.state.languageWords,
      numberCorrect: this.state.numberCorrect,
      numberIncorrect: this.state.numberIncorrect,
      totalScore: this.state.totalScore,
      setLanguage: this.setLanguage,
      setLanguageWords: this.setLanguageWords,
      setNumberCorrect: this.setNumberCorrect,
      setNumberIncorrect: this.setNumberIncorrect,
      setTotalScore: this.setTotalScore,
      setError: this.setError,
      clearError: this.clearError,
    };
    return (
      <DashboardContext.Provider value={value}>
        <section className="dashboard-container">
          <Dashboard />
        </section>
      </DashboardContext.Provider>
    );
  }
}

export default DashboardRoute;
