import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000';


const postPostIt = async (values) => {
  return await axios.post('/api/new/postIt', values).then((res) => res.data);
};

const postLogin = async (values = null) => {
  return await axios.post('/api/login', values).then((res) => res.data);
};
const deletePostIt = async (id) => {
  return await axios.delete(`/api/postIt/${id}/delete`).then((res) => res.data);
}
export { postPostIt, postLogin, deletePostIt };