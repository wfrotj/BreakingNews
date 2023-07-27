import axios from "axios";

const baseUrl = "https://news-headlines.onrender.com/login";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default {
  login,
};
