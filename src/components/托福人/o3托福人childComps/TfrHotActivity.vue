<template>
  <div class="index_itemR">
    <div class="index_itemRtitle">
      <h3>热门活动</h3>
      <a href="###" class="index_itemRMore">更多</a>
    </div>
    <div class="tfr_hotAction" v-for="(item,index) in hotAct.title">
      <dl>
        <dt><a href="#"><img src="~assets/img/托福人/tfr_1.png" width="281" height="85"></a></dt>
        <dd><a href="#">{{hotAct.title[index]}}</a></dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TfrHotActivity",
    data(){
      return {
        hotAct:{
          title: ['热门活动标题','热门活动标题','热门活动标题']
        }
      }
    }
  }
</script>

<style scoped>
  .index_itemR{
    padding:15px 0; border-bottom:solid 1px #fafafa;}
  .index_itemRtitle{
    display: flex;
    overflow:hidden;}
  .index_itemRtitle h3{
    width:auto;  height:26px; font-size:16px; line-height:26px; margin-bottom:10px; margin-left: 5px}
  a.index_itemRMore{
    margin-left: 200px;
  }
  a.index_itemRMore:hover{ height:26px; line-height:26px;  color:#666;}

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