<template>
<div class="doc1180 paddingT20 fn-clear">
  <div class="tfr_left" v-for="(item,index) in tfrclassfynum">
    <itemDetails :tfr_sort="tfr_sort">
      <template v-slot:item-title-div>
        <div class="tfr_classifyh3">
          <a href="#" @click="todetails" style="text-decoration: none">
            <h3 >{{tfrClassfy_titles[0]}}</h3></a>
          <div><a href="###" class="imgA"><img class="img" src="~assets/img/托福人/125x125.jpg"/> alex</a>
          </div>
        </div>
        <div class="tfr_classifyText">
          <span>{{tfr_Classfy_Details[0]}}</span>
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
  import itemDetails from "./03托福人分类页childComps/itemDetails";
  import tfrPageList from "./03托福人分类页childComps/tfrPageList";
    export default {
      components: {
        itemDetails,
        tfrPageList
      },
        data() {
            return {
              tfr_sort:'',
              tfrclassfynum:[1,2,3,4],
              tfrClassfy_titles:['托福口语5个技巧带你入门'] ,
              tfr_Classfy_Details: ['对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，对于很多打算考托福的同学来说，'
              + '该如何准备托福口语是个很困扰的问题。其实，'
              + '利用OG，分析录音对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，'],
            }
        },
        mounted: function () {
        },
      created() {
          this.tfr_sort = this.$route.query.tfr_sort;
      },
      methods: {
        todetails() {
          this.$router.push({
            path: '/toeflman/toelfsort/details',
            query: {
              tfr_sort: this.tfr_sort
            }
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
  .tfr_classifyh3 .imgA{display:block;width: 100px;text-decoration: none;color: inherit;font-size: 14px;color: #999999;}
  .tfr_classifyh3 .img{width: 30px;height: 30px;margin-left: -15px}

  .tfr_classifyText{
    font-size:14px;
    line-height:24px;
    color:#999;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
