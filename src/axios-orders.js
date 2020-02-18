import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d460e.firebaseio.com/'
});

export default instance;