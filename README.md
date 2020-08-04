<p align="center">
  <img src="https://i.waifu.pics/Lcq0Tx8.jpg" width=45%><br>
  <b>A simple wrapper for <a href="https://waifu.pics">waifu.pics</a> api</b>
  <br><br>
  <img src="https://img.shields.io/github/package-json/v/tentaclenotsoft/node-waifu.pics?style=flat-square" alt="Version">
  <img src="https://img.shields.io/david/tentaclenotsoft/node-waifu.pics?style=flat-square" alt="Dependencies">
  <a href="https://github.com/tentaclenotsoft/node-waifu.pics/blob/master/LICENSE"><img src="https://img.shields.io/github/license/tentaclenotsoft/node-waifu.pics?style=flat-square" alt="License"></a>
</p>

## Installation

```bash
# with npm
$ npm install waifu.pics

# or with Yarn
$ yarn add waifu.pics
```

## Methods

The structure of this library contains an object of functions and they are Promise.
[Available methods](https://github.com/tentaclenotsoft/node-waifu.pics/blob/master/lib/Endpoints.js).

## Advanced examples

```js
const { nsfw } = require('waifu.pics')

nsfw()
  .then(console.log)
  .catch(console.error)
```
#### Returns

```js
{ url: 'https://i.waifu.pics/8Ml_Y6V.jpg' }
```