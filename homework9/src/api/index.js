import axios from "axios";

const apiHost = process.env.REACT_APP_API_HOST;
const get = async (path) => {
  const response = await axios.get(`${apiHost}${path}`);
  return response.data;
};

const post = async (path, data) => {
  return await axios.post(`${apiHost}${path}`, data);
};

const api = { get, post };

export default api;
