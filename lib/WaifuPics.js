const fetch = require('node-fetch')
const endpoints = require('./Endpoints.js')

const API_URL = 'https://waifu.pics/api'

/**
 * @param {string} endpoint An endpoint contained in {@link https://waifu.pics/api/endpoints}
 * @returns {Promise}
 */
function _request (endpoint) {
  return fetch(`${API_URL}${!endpoint.startsWith('/') ? `/${endpoint}` : endpoint}`).then((response) => response.json())
}

const WaifuPics = {
  /**
   * @returns {Promise<Object>}
   */
  endpoints () {
    return _request('/endpoints')
  }
}

Object.keys(endpoints).forEach((type) => {
  WaifuPics[type] = {}

  endpoints[type].forEach((category) => {
    WaifuPics[type][category] = () => _request(`/${type}/${category}`)
  })
})

module.exports = WaifuPics