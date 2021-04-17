import axios from 'axios'

axios.defaults.baseURL = 'https://api.producthunt.com'
axios.defaults.method = 'Get'
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Authorization'] =
    'Bearer ah7jK8UqHEpefPjplVqHJgMZx7rv0xQR4-BklgmenQU'

export default axios
