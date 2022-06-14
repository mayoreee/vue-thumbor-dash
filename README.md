# vue-thumbor-dash

Vue.js component for integrating Dash's distributed image thumbnail service in client applications

## Install

```
npm i git+https://github.com/mayoreee/vue-thumbor-dash.git
```

## Usage

#### Import thumbor_dash component

```js
import thumborDash from "vue-thumbor-dash/src/thumborDash.vue";
```

#### Props

| Name         | Type   | Default                                        | Description                    |
| ------------ | ------ | ---------------------------------------------- | ------------------------------ |
| network      | String | "testnet"                                      | Dash network                   |
| masternode   | String | "localhost:8888"                               | Server address [ip:port]       |
| contractId   | String | "DbBHu3Ct1zD1AYAiw58V7QXT22B3k7qRLDLfaXqiRQp5" | Thumnail data contract id      |
| documentType | String | "thumbnailField"                               | Optional                       |
| mnemonic     | String | ""                                             | Wallet mnemonic                |
| ownerId      | String | ""                                             | Identity of owner              |
| imageWidth   | Number | 200                                            | Width of image                 |
| imageHeight  | Number | 200                                            | Height of image                |
| resizeValues | Array  | [minWidth, minHeight, maxWidth, maxHeight]     | Integer array of resize limits |
| show         | boolean  | true     | Show the image crop-and-upload ui component |
| imgDataUrl   | String  | ""     | URL of default placeholder image |