import axios from 'axios'

axios.defaults.baseURL = "https://api.producthunt.com"

// Headers
axios.defaults.headers['Content-Type'] = 'application/vnd.api+json'
axios.defaults.headers['Accept'] = 'application/vnd.api+json'
axios.defaults.headers['Authorization'] = 'bearer hasdhashdha'

export default axios
