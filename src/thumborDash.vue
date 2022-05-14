<script>
import "babel-polyfill"; // es6 shim
import Uploader from "./uploaderComponent.vue";
import { generateUploadURL } from "js-thumbor-dash/src/url/url.js";

export default {
  // Children of this component
  components: {
    uploader: Uploader,
  },
  // Data passed in from a parent of this component
  props: {
    network: {
      type: String,
      default: "testnet",
    },
    masternode: {
      type: String,
      default: "localhost:8888", // [ip:port]
    },
    contractId: {
      type: String,
      default: "Bw7U7xUiwoE5wkkrJxbBLdf442TiY63SDvCDZLNrzTHr",
    },
    documentType: {
      type: String,
      default: "thumbnailField",
    },
    mnemonic: {
      type: String,
    },
    ownerId: {
      type: String,
    },
    imageWidth: {
      type: Number,
      default: 300,
    },
    imageHeight: {
      type: Number,
      default: 300,
    },
    resizeValues: {
      type: Array,
    },
  },
  // Reactive state of this component
  data() {
    return {
      show: true,
      url: generateUploadURL(this.masternode),
      width: this.imageWidth.toString(),
      height: this.imageHeight.toString(),
      imgDataUrl: "",
    };
  },
  // methods in the component
  methods: {
    toggleShow() {
      console.warn("this is a warning");
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    // eslint-disable-next-line no-unused-vars
    cropSuccess(imgDataUrl, field) {
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    // eslint-disable-next-line no-unused-vars
    cropUploadSuccess(jsonData, field) {
      console.log(jsonData);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    // eslint-disable-next-line no-unused-vars
    cropUploadFail(status, field) {
      console.log(status);
    },
  },
};
</script>

<template>
  <div id="thumborDash">
    <a class="btn" @click="toggleShow">set avatar</a>
    <uploader
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="width"
      :height="height"
      :url="url"
      :params="params"
      :headers="headers"
      img-format="png"
      langType="en"
      imgFormat="jpg"
    ></uploader>
    <img :src="imgDataUrl" />
  </div>
</template>
