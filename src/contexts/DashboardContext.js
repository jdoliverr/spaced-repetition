import React from "react";

const DashboardContext = React.createContext({
  language: {},
  languageWords: [],
  numberCorrect: {},
  numberIncorrect: {},
  totalScore: {},
  setLanguage: () => {},
  setLanguageWords: () => {},
  setNumberCorrect: () => {},
  setNumberIncorrect: () => {},
  setTotalScore: () => {},
});

export default DashboardContext;
