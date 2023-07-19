import axios from "axios";

const baseUrl = "http://localhost:1114/login";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default {
  login,
};
