import React from "react";

const DashboardContext = React.createContext({
  head: {},
  language: {},
  languageWords: [],
  numberCorrect: {},
  numberIncorrect: {},
  totalScore: {},
  setHead: () => {},
  setLanguage: () => {},
  setLanguageWords: () => {},
  setNumberCorrect: () => {},
  setNumberIncorrect: () => {},
  setTotalScore: () => {},
});

export default DashboardContext;
