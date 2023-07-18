import axios from "axios";

const apiClient = axios.create({
  baseURL: "/register",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

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
