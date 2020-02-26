<template>
<div class="doc1180 paddingT20 fn-clear" v-loading="loading">
  <div class="tfr_left" v-for="(item,index) in ArticleList.list" >
    <itemDetails :tfr_Sort_type="tfr_Sort_type" :publisdate="item.article_date" :visit="item.article_visit" :collect="item.article_collect">
      <template v-slot:item-title-div>
        <div class="tfr_classifyh3">
          <a href="#" @click="todetails" style="text-decoration: none">
            <h3 >{{item.article_title}}</h3></a>
          <div><a href="###" class="imgA"><img class="img" src="~assets/img/托福人/125x125.jpg"/> {{item.article_author}}</a>
          </div>
        </div>
        <div class="tfr_classifyText">
          <span>{{item.article_content}}</span>
        </div>
      </template>
    </itemDetails>
  </div>
  <div class="tfr_left">
    <tfrPageList></tfrPageList>
  </div>
</div>
</template>

<script>
  import itemDetails from "./o3托福人分类页childComps/itemDetails";
  import tfrPageList from "../common/tfrPageList";

  export default {
      components: {
        itemDetails,
        tfrPageList
      },
        data() {
            return {
              loading: true,
              tfr_Sort_type:'',
              tfrclassfynum:[1,2,3,4],
              tfrClassfy_titles:['托福口语5个技巧带你入门'] ,
              tfr_Classfy_Details: [],
              ArticleList: {
                page: 0,
                list: [],
              },
            }
        },
    mounted() {
        this.loading = true;
        this.tfr_Sort_type = this.$route.query.tfr_Sort_type;
        this.getToeflmanSortData(this.tfr_Sort_type)
      },
      methods: {
        todetails() {
          this.$router.push({
            path: '/toeflman/toelfsort/details',
            query: {
              tfr_Sort_type: this.tfr_Sort_type
            }
          })
        },
        getToeflmanSortData(type) {
          this.postRequest('/tfrArticle/home',{articleType:type}).then(res =>{
            this.ArticleList.list.push(...res.data.list);
            this.loading=false;
          }).catch(err =>{
            console.log(err);
          })
        }
      }
    }
</script>

<style scoped>
  .doc1180{width:1180px; margin:0 auto}
  .paddingT20{padding-top:20px;}
  .tfr_left{width:850px;  overflow:hidden;font-family:"宋体"}
  .tfr_classifyh3{
    display: inline-flex;
    font-size:24px; line-height:34px;color:#333; margin-bottom:10px;}
  .tfr_classifyh3 h3{
    padding: 0px;margin: 0px;
    color: #333333;width: 100%;height: 50px;}
  .tfr_classifyh3 div {
    margin-left: 15px;
    +width: 18%;height: 50px;}
  .tfr_classifyh3 .imgA{display:block;width: 200px;text-decoration: none;color: inherit;font-size: 14px;color: #999999;}
  .tfr_classifyh3 .img{width: 30px;height: 30px;margin-left: -15px}

  .tfr_classifyText{
    height: 100px;
    font-size:14px;
    line-height:24px;
    color:#999;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
