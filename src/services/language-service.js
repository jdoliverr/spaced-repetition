import config from "../config";
import TokenService from './token-service';

const languageService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
  getLanguage() {
    console.log(TokenService.getAuthToken())
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((err) => {
        console.error(err.message);
      });
  },
};

export default languageService;
