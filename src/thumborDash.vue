<script>
import "babel-polyfill"; // es6 shim
import Uploader from "vue-image-crop-upload/";

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
      url: "http://" + this.masternode + "/image",
      width: this.imageWidth.toString(),
      height: this.imageHeight.toString(),
      imgDataUrl: "",
    };
  },
  // methods in the component
  methods: {
    toggleShow() {
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
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    },
    /**
     * submit document to platform
     */
    submitDocument() {
      //TODO submit to Platform
      console.log("Image is being submitted to platform...");
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
