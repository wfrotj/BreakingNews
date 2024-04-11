import axios from "axios";

const baseUrl = "https://news-headlines.onrender.com/login";

async function login(credentials) {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
}

export default {
  login,
};
