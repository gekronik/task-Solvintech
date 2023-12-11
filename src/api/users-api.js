import axios from "axios";

const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const usersAPI = {
    getUsers() {
        return axios.get(`${BASE_URL}/users`)
    }
}