const fetch = require('node-fetch')
const endpoints = require('./Endpoints.js')

const API_URL = 'https://waifu.pics/api'

/**
 * @param {string} endpoint An endpoint contained in {@link https://waifu.pics/api/endpoints}
 * @returns {Promise}
 */
function request (endpoint) {
  return fetch(`${API_URL}${!endpoint.startsWith('/') ? `/${endpoint}` : endpoint}`).then(parseResponse)
}

async function parseResponse (response) {
  if (!response.ok) {
    const failure = await response.json()

    throw new Error(failure.message)
  }

  return response.json()
}

const WaifuPics = {
  /**
   * @returns {Promise<Object>}
   */
  endpoints () {
    return request('GET', '/endpoints')
  }
}

Object.keys(endpoints).forEach((type) => {
  WaifuPics[type] = {}

  endpoints[type].forEach((category) => {
    WaifuPics[type][category] = () => request(`/${type}/${category}`)
  })
})

module.exports = WaifuPics