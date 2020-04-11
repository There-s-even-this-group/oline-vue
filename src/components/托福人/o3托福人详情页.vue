<template>
<div>
  <tfr-detais>
      <div class="tfr_left" slot="contain">
        <div class="tfr_Details">
          <div class="tfr_DetailsPic"><img :src="'http://120.27.241.26/'+Article[0].article_picture"></div>
          <div class="tfr_DetailsTitle">{{Article[0].article_title}}</div>
          <div class="tfr_DetailsTime">发布于：<span>22：00</span><span>{{Article[0].article_date}}</span></div>
          <div class="tfr_DetailsTime">发布人：<a href="###">{{Article[0].article_author}}</a></div>
          <div class="tfr_DetailsFx"><a><img src="~assets/img/托福人/tfr_DetailsFx.png"></a></div>
          <div class=" tfr_DetailsMain">
            <tfr_ContentDetails :article_content="Article[0].article_content"></tfr_ContentDetails>
          </div>
          <div class="tfr_DetailsPl" >
            <tfr_ContentDetailsPl v-if="isRouterAlive" @itemclick="addComment" :article_id="this.article_id"  ref="c1"></tfr_ContentDetailsPl>
          </div>
        </div>
        <tfrPageList @NumChange="Numchange"></tfrPageList>
      </div>
    <tfr_-side-bar slot="sideBar" Rtitle="名师推荐" :titles="teacherName"  :imgURLs="imgs">
      <div slot="dd-main-info" class="dd-main-info">
        <span><a href="###">60分以下考生作业: 盛会杰老师 于2015-01-15日发作业</a></span>
      </div>
    </tfr_-side-bar>
  </tfr-detais>

</div>
</template>

<script>
  import tfrDetais from "./o3托福人";
  import tfrPageList from "../common/tfrPageList";

  import tfr_ContentDetails from "../common/tfr_ContentDetails";
  import tfr_ContentDetailsPl from "../common/tfr_ContentDetailsPl";
  import tfr_SideBar from "../common/tfr_SideBar";
    export default {
      components:{
        tfrDetais,
        tfrPageList,
        tfr_ContentDetails,
        tfr_ContentDetailsPl,
        tfr_SideBar
      },
      provide(){
        return{
          reload:this.reload
        }
      },
      computed: {
        getDate: function() {
          let day = new Date();
          return day.getFullYear() + '-' + day.getMonth() + '-' + day.getDay();
        },
      },
      created() {
        this.article_id = this.$route.query.article_id;
        this.getToeflmanDetailData(this.article_id);
      },
        data() {
            return {
              isRouterAlive:true,
              article_id: '',
              imgs:[require("assets/img/托福人/tfr_mstj.png"),require("assets/img/托福人/tfr_mstj.png"),
                require("assets/img/托福人/tfr_mstj.png")],
              teacherName:["教师名字","教师名字","教师名字"],
              Article:[],
              commentUser: {
                username:'',
                articleID:'',
                commentDate:'',
                commentContent:''
              },
            }
        },
        mounted: function () {
        },
        methods: {
          reload (){
            this.isRouterAlive = false
            this.$nextTick(function(){
              this.isRouterAlive = true
            })
          },
          Numchange(page){
            this.isRouterAlive = false;
            console.log(page);
            this.$refs.c1.getCommentByArticle(page);
            this.isRouterAlive = true
          },
          getToeflmanDetailData(id) {
            this.postRequest('/tfrArticle/ArticleDetail',{id:id}).then(res =>{
              console.log(res);
              this.Article.push(...res.data.list);
            }).catch(err =>{
              console.log(err);
            })
          },
          // getToelfmanDetailTitleImg(id) {
          //   this.getRequest('/img/imgGive',{id:id}).then( res => {
          //     console.log(res.data);
          //     this.imgURL = '/images/'+ res.data;
          //   })
          // }
          addComment(notedata){
            this.commentUser.articleID = this.article_id;
            this.commentUser.username = 'wuyue';
            this.commentUser.commentDate = this.getDate;
            this.commentUser.commentContent = notedata;
            this.postRequest('/addComment',this.commentUser).then(res => {
              console.log(res);
            })
          },

        }
    }
</script>

<style scoped>
  .tfr_left{width:100%px;  overflow:hidden;font-family:"宋体"}
  .tfr_DetailsPic img
  {width:850px;height:430px; overflow:hidden; margin-bottom:50px;}
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
