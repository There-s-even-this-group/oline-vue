<template>
  <div >
    <div class="index_itemRtitle">
      <slot name="itemRtitle"><h3>{{Rtitle}}</h3></slot>
      <slot name="itemRMore"><a href="#" class="index_itemRMore">更多</a></slot>
    </div>
    <div class="content" v-for="(item,index) in titles">
      <slot>
        <dl>
          <dt><a href="#"><img :src="imgURLs[index]" ></a></dt>
          <dd>
            <slot name="ddTitle">
            <div class="ddTitle"><span><a href="#">{{item}}</a></span></div>
            </slot>
            <slot name="dd-main-info">
            </slot>
          </dd>
        </dl>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tfr_SideBar",
    data() {
      return {

      }
    },
    props: {
      imgURLs:{
        type:Array,
        default() {
          return []
        }
      },
      titles: {
        type:Array,
        default() {
          return []
        }
      },
      mainInfo: {
        type: Array,
        default() {
          return []
        }
      },
      Rtitle: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .index_itemRtitle{
    display: flex;
    overflow:hidden;}
  .index_itemRtitle h3{
    flex: 1;
    width:auto;  height:26px; font-size:16px; line-height:26px; margin-bottom:10px; margin-left: 5px}
  a.index_itemRMore{
    flex: 6;
  }
  a.index_itemRMore:hover{ height:26px; line-height:26px;  color:#666;}
  .ddTitle {
    text-align: left;
    margin-left: 5px;
  }
  .content dl{
    display: flex;
  }
  .content img {}
  .content dt{ display:flex;overflow:hidden; margin-bottom:10px;}
  .content dd{
    color:#555;
    font-size:14px;
    line-height:34px;
    width: 200px;
    height:60px;
    overflow:hidden;
    margin-bottom:10px;
    text-align: right;
    overflow: hidden;
  }
</style>