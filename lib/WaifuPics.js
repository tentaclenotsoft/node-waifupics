const fetch = require('node-fetch')
const endpoints = require('./Endpoints.js')

const API_URL = 'https://waifu.pics/api'

/**
 * @param {string} endpoint An endpoint contained in {@link https://waifu.pics/api/endpoints}
 * @returns {Promise}
 */
function request (method, endpoint, options = {}) {
  return fetch(`${API_URL}${!endpoint.startsWith('/') ? `/${endpoint}` : endpoint}`, {
    method,
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(parseResponse)
}

async function parseResponse (response) {
  if (!response.ok) {
    const failure = await response.json()

    throw new Error(failure.message)
  }

  if (response.headers.get('content-type').startsWith('text/html')) {
    throw new Error(`Category ${response.url.match(/\/\w+/g).pop().substr(1)} not found`)
  }

  return response.json()
}

const WaifuPics = {
  /**
   * @returns {Promise<Object>}
   */
  endpoints () {
    return request('GET', '/endpoints')
  },

  many: {}
}

Object.keys(endpoints).forEach((type) => {
  WaifuPics[type] = {}
  WaifuPics.many[type] = {}

  endpoints[type].forEach((category) => {
    const endpoint = `/${type}/${category}`

    WaifuPics[type][category] = () => request('GET', `/${type}/lewdneko`)
    WaifuPics.many[type][category] = (exclude) => request('POST', '/many' + endpoint, { body: JSON.stringify({ exclude }) })
  })
})

module.exports = WaifuPics