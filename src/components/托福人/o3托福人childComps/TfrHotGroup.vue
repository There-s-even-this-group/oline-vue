<template>
  <div class="index_itemR">
    <div class="index_itemRtitle">
      <h3>热门小组</h3>
      <a href="###" class="index_itemRMore">换一换</a>
    </div>
    <div class="index_itemRHot" v-for="(item,index) in hotGp.text">
      <dl>
        <dt><a href="###"><img src="~assets/img/托福人/48x48.png" width="48" height="48"></a></dt>
        <dd>
          <div class="fn-clear">
            <span class="index_itemRHotName">{{hotGp.title[index]}}</span>
            <span class="index_itemRHotPic"><img src="../../../assets/img/托福人/index_itemRHot.png" ></span>
            <span class="index_itemRHotNum">{{hotGp.hotnum[index]}}</span>
          </div>
          <div class="index_itemRHotText">{{hotGp.text[index]}}</div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TfrHotGroup",
    data(){
      return {
        hotGp: {
          title: ['标题请控制字数标题请控制字数','标题请控制字数','标题请控制字数'],
          text: ['简介请控制字数简介请控制字数简介请控制字数','简介请控制字数简介请控制字数简介请控制字数简介请控制字数','简介请控制字数'],
          hotnum:['234567人加入','12345人加入','34533人加入'],
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
    overflow:hidden;
  }
  .index_itemRtitle h3{
    width:auto;  height:26px; font-size:16px; line-height:26px; margin-bottom:10px; margin-left: 5px}
  a.index_itemRMore{
    margin-left: 200px;
  }
  a.index_itemRMore:hover{ height:26px; line-height:26px;  color:#666;}

  .index_itemRHot{}
  .index_itemRHot dl{
    display: flex;
    overflow:hidden; margin-bottom:20px;}
  .index_itemRHot dt{width:48px; height:48px; }
  .index_itemRHot dt img{width:48px; height:48px;}
  .index_itemRHot dd{width:210px; height:48px; overflow:hidden; }
  .index_itemRHotName,
  .index_itemRHotNum{
    height:22px; display:inline-table; font-size:12px; color:#999; line-height:22px;}
  .index_itemRHotName{
    display: inline-block;
    width: 95px;
    height: 22px;
    color:#68BF4A;
    padding-right:10px;
    overflow:hidden;
    text-align: left;
  }
  .index_itemRHotPic{padding:3px 10px 0 0;display:inline-table;}
  .index_itemRHotText{
    height:24px;
    font-size:12px;
    line-height:22px;
    color:#999;
    overflow:hidden;
    text-align: left;
    margin-left: 5px;
  }
</style>