<template>
<div>
  <tfr-detais>
    <template v-slot:contain>
      <div class="tfr_left">
        <div class="tfr_Details">
          <div class="tfr_DetailsPic"><img src="~assets/img/托福人/850x430.png"></div>
          <div class="tfr_DetailsTitle">{{ArticleTitle}}</div>
          <div class="tfr_DetailsTime">发布于：<span>22：00</span><span>2015-12-29</span></div>
          <div class="tfr_DetailsTime">发布人：<a href="###">alex</a></div>
          <div class="tfr_DetailsFx"><a><img src="~assets/img/托福人/tfr_DetailsFx.png"></a></div>
          <div class=" tfr_DetailsMain">
            <tfr_ContentDetails></tfr_ContentDetails>
          </div>
          <div class="tfr_DetailsPl">
            <tfr_ContentDetailsPl></tfr_ContentDetailsPl>
          </div>
        </div>
      </div>
      <div class="tfr_left">
        <tfrPageList></tfrPageList>
      </div>
    </template>
    <template v-slot:sideBar>
    <tfr_-side-bar slot="sideBar" Rtitle="名师推荐" :titles="teacherName"  :imgURLs="imgs">
      <div slot="dd-main-info" class="dd-main-info">
        <span><a href="###">60分以下考生作业: 盛会杰老师 于2015-01-15日发作业</a></span>
      </div>
    </tfr_-side-bar>
    </template>
  </tfr-detais>

</div>
</template>

<script>
  import tfrDetais from "./o3托福人";
  import asd from "./o3托福人分类页";
  import tfrPageList from "./o3托福人分类页childComps/tfrPageList";

  import tfr_ContentDetails from "../common/tfr_ContentDetails";
  import tfr_ContentDetailsPl from "../common/tfr_ContentDetailsPl";
  import tfr_SideBar from "../common/tfr_SideBar";
    export default {
      components:{
        tfrDetais,
        asd,
        tfrPageList,
        tfr_ContentDetails,
        tfr_ContentDetailsPl,
        tfr_SideBar
      },
      created() {
        this.tfr_Sort = this.$route.query.tfr_Sort;
      },
        data() {
            return {
              tfr_Sort:'',
              ArticleTitle:'这里是标题文字标题',
              imgs:[require("assets/img/托福人/tfr_mstj.png"),require("assets/img/托福人/tfr_mstj.png"),
                require("assets/img/托福人/tfr_mstj.png")],
              teacherName:["教师名字","教师名字","教师名字"],
            }
        },
        mounted: function () {
        },
        methods: {}
    }
</script>

<style scoped>
  .tfr_left{width:100%px;  overflow:hidden;font-family:"宋体"}
  .tfr_DetailsPic{width:850px;height:430px; overflow:hidden; margin-bottom:50px;}
  .tfr_DetailsTitle{font-size:22px; line-height:32px; font-weight:bold; margin-bottom:15px;}
  .tfr_DetailsTime{color:#999; font-size:12px; line-height:22px; margin-bottom:15px;}
  .tfr_DetailsTime span{ margin:0 5px 0 0;}
  .tfr_DetailsMain{font-size:14px; line-height:24px; color:#666; padding-bottom:30px; border-bottom:solid 1px #dcdcdc; margin-bottom:20px;}
  .tfr_DetailsFx{ margin-bottom:15px; border-bottom:solid 1px #dcdcdc; padding-bottom:15px;}
  .dd-main-info {
    display: block;
    line-height: 34px;
  }
  .dd-main-info span {
   height: auto;
  }
</style>
