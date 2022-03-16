import axios from 'axios';

const api = axios.create({
    url : process.env.REACT_APP_API_URL,
    accept: 'application/json'
})




export default api;