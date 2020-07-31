import config from "../config";
import TokenService from "./token-service";

const languageService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
  postUserGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ guess: guess }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
};

export default languageService;
