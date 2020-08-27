<p align="center">
  <img src="https://i.waifu.pics/Lcq0Tx8.jpg" width=40%><br>
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

| The structure of this library contains an object of functions and they are Promise. [Available methods](https://github.com/tentaclenotsoft/node-waifu.pics/blob/master/lib/Endpoints.js)<br>Exists possibility of having methods not available in this package that will be possible to be accessed from the `fetch` method. |
| --- |

### fetch(endpoint)

- **endpoint**: A string containing one of these [endpoints](https://waifu.pics/api/endpoints)

>Returns: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

### endpoints()
>Returns: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[[]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)>


## Search usage example

```js
const WaifuPics = require('waifu.pics')

WaifuPics.fetch('nsfw')
  .then(console.log)
  .catch(console.error)
```
#### Returns

```js
{ url: 'https://i.waifu.pics/8Ml_Y6V.jpg' }
```