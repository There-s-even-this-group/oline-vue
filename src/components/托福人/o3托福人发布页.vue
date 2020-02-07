<template>
  <div>
    <div class="upload-picture">
      <tfrupload-picture></tfrupload-picture>
    </div>
    <div style="margin: 20px;"></div>
    <div class="tfr-form">
      <tfr-from></tfr-from>
    </div>
  </div>
</template>

<script>
  import tfruploadPicture from "./o3托福人发布页childComps/tfruploadPicture";
  import tfrFrom from "./o3托福人发布页childComps/tfrFrom";
    export default {
      components:{
        tfruploadPicture,
        tfrFrom
      },
        data() {
            return {

            }
        },
        mounted: function () {
        },
        methods: {

        }
    }
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
  .tfr-form {
  }
</style>
