const fetch = require('node-fetch')
const ENDPOINTS = require('./Endpoints.js')

const API_URL = 'https://waifu.pics/api'

const WaifuPics = {
  /**
   * @param {string} endpoint An endpoint contained in {@link https://waifu.pics/api/endpoints}
   * @returns {Promise}
   */
  fetch (endpoint) {
    return fetch(`${API_URL}${!endpoint.startsWith('/') ? `/${endpoint}` : endpoint}`).then((response) => response.json())
  },

  /**
   * @returns {Promise<string[]>}
   */
  endpoints () {
    return this.fetch('/endpoints')
  }
}

for (let endpoint of ENDPOINTS) {
  WaifuPics[endpoint] = function () {
    return this.fetch(endpoint)
  }
}

module.exports = WaifuPics