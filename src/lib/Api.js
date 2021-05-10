import Api from 'axios'

Api.defaults.baseURL = 'https://api.producthunt.com'
Api.defaults.method = 'Get'
Api.defaults.headers['Accept'] = 'application/json'
Api.defaults.headers['Content-Type'] = 'application/json'
Api.defaults.headers['Authorization'] =
    'Bearer ah7jK8UqHEpefPjplVqHJgMZx7rv0xQR4-BklgmenQU'

export default Api
