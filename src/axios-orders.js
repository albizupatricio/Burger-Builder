import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-94228.firebaseio.com/'
});

export default instance;