import axios from 'axios'

const URL = 'http://localhost:3000/customers'

export const fetchCustomersService = () => {
    return axios.get(URL)
}
