<template>
  <div class="index_itemR">
    <tfr_-side-bar :titles="hotAct.titles" Rtitle="热门活动" :imgURLs="hotAct.imgs">
    </tfr_-side-bar>
  </div>
</template>

<script>
  import tfr_SideBar from "../../common/tfr_SideBar";
  export default {
    name: "TfrHotActivity",
    components:{
      tfr_SideBar
    },
    data(){
      return {
        hotAct:{
          titles: ['热门活动标题','热门活动标题','热门活动标题'],
          imgs:[require("assets/img/托福人/tfr_1.png"),require("assets/img/托福人/tfr_1.png"),
            require("assets/img/托福人/tfr_1.png")]
        }
      }
    }
  }
</script>

<style scoped>

  .index_itemR{
    display: inline-block;
    padding:15px 0; border-bottom:solid 1px #fafafa;
    text-align: left;
  }
  .index_itemR dl {
    display: block;
  }
  .tfr_hotAction{
    display: flex;
    border-bottom:solid 1px #dcdcdc;
    width: 300px;
    margin-top: 10px;
  }
  .tfr_hotAction dd{
    padding: 10px 5px 20px;
  }
</style>