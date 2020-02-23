import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:4000/api/jokes',
        headers: {
            authorization: token
        }
    })
}