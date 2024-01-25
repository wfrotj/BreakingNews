import axios from "axios";

const baseURL = "https://news-headlines.onrender.com/register";

let token = null;
function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function createUser(user) {
  const config = {
    headers: { Authorization: token },
  };
  return axios.post(baseURL, customer).then((res) => res.data);
}
export default {
  createUser,
  setToken,
};
