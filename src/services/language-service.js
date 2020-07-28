import config from "../config";

const LanguageService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/`)
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/head`)
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
};

export default LanguageService;
