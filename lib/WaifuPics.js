const fetch = require('node-fetch')
const Endpoints = require('./Endpoints.js')

const API_URL = 'https://waifu.pics/api'
const WaifuPics = {}

Endpoints.forEach((endpoint) => WaifuPics[endpoint] = () => fetch(API_URL + '/' + endpoint).then((response) => response.json()))

module.exports = WaifuPics