import axios from "axios";

const baseUrl = "/login";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default {
  login,
};
