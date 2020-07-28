import React from "react";

const DashboardContext = React.createContext({
  head: {},
  languageWords: [],
  numberCorrect: {},
  numberIncorrect: {},
  totalScore: {},
  setHead: () => {},
  setLanguageWords: () => {},
  setNumberCorrect: () => {},
  setNumberIncorrect: () => {},
  setTotalScore: () => {},
});

export default DashboardContext;
