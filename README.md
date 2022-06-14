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

## Example

```vue
<script>
import thumborDash from "vue-thumbor-dash/src/thumborDash.vue";

export default {
  components: {
    uploader: thumborDash,
  },
  // Reactive state of this component
  data() {
    return {
      network: "testnet",
      masternode: "localhost:8888",
      contractId: "DbBHu3Ct1zD1AYAiw58V7QXT22B3k7qRLDLfaXqiRQp5",
      documentType: "thumbnailField",
      mnemonic:
        "bulk chimney foam muscle detail matter snake purchase science exile upon marriage where history notice antique arm lawn upgrade hope athlete foam hidden false",
      ownerId: "856aSH6uEBaHpndZYXDk72NJbZqXokNSPGrs8nKbd7QL",
      resizeValues: [1, 1, 1200, 800],
      show: true,
      imgDataUrl: "https://picsum.photos/200",
    };
  },
  // methods in the component
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     */
    cropUploadSuccess() {},
    /**
     * upload fail
     * [param] error
     * [param] field
     */
    cropUploadFail(error) {
      console.log(error);
    },
  },
};
</script>

<template>
  <div id="dash">
    <a class="btn" @click="toggleShow">set avatar</a>
    <uploader
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :network="network"
      :masternode="masternode"
      :contractId="contractId"
      :documentType="documentType"
      :mnemonic="mnemonic"
      :ownerId="ownerId"
      :resizeValues="resizeValues"
    ></uploader>
    <img :src="imgDataUrl" />
  </div>
</template>
```
