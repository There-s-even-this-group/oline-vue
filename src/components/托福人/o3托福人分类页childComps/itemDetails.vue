<template>
  <div class="tfr_classify">
    <dl>
      <dt><slot name="item-img-dt"><img src="~assets/img/托福人/400x240.png" ></slot></dt>
      <dd>
        <slot name="item-title-div">
          <div class="tfr_classifyh3">
            <h3>{{tfrClassfy_title}}</h3>
            <div><a href="###" class="imgA"><img class="img" src="@/assets/img/托福人/125x125.jpg"/> alex</a>
            </div>
          </div>
          <div class="tfr_classifyText">
            <span>{{tfr_Classfy_Details}}</span>
          </div>
        </slot>
        <div class="tfr_classifyTime">
            <span>所属分类:</span><a href="###">{{tfr_Sort_type}}</a>
            <span STYLE="margin-left: 30px">发布日期：</span>
            <span>{{publisdate}}</span>
          <delete-andedit>
            <a href="" slot="delete" @click="deleteArticle" style="margin-left: 5px">删除</a>
            <a href="" slot="edit" @click="editArticle" style="margin-left: 5px"> 编辑</a>
          </delete-andedit>
            <a href=""></a>
            <div class="commDiv">
              <span class="glyphicon glyphicon-heart" style="color: #D92A11;"></span>
              <span>100</span>
              <span class="glyphicon glyphicon-user" style="color: #388BFF;"></span>
              <span>20</span>
            </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
  import deleteAndedit from "../../common/deleteAndedit";
  export default {
    name: "itemDetails",
    components: {
      deleteAndedit,
    },
    data(){
      return {
        publisdate:'2020-2-5',
        tfrClassfy_title:['托福口语5个技巧带你入门'] ,
        tfr_Classfy_Details: ['对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，对于很多打算考托福的同学来说，' +
        '该如何准备托福口语是个很困扰的问题。其实，' + '利用OG，分析录音对于很多打算考托福的同学来说，该如何准备托福口语是个很困扰的问题。其实，利用OG，分析录音，'],
      }
    },
    methods:{
      deleteArticle() {
        console.log('删除文章');
      },
      editArticle() {
        console.log('编辑文章');
      },
    },
    props:{
      tfr_Sort_type: {
        type: String,
        default() {
          return "阅读"
        }
      }
    }
  }
</script>

<style scoped>
  .tfr_classify {}
  .tfr_classify dl{
    display: flex;
    overflow:hidden; margin-top: 30px;}
  .tfr_classify dt,
  .tfr_classify dt img{width:400px; height:240px;}
  .tfr_classify dt{width:400px;  overflow:hidden;}

  .tfr_classify dd{
    display: block;
    width:430px; }



  .tfr_classifyTime {
    margin-top: 20px;
    display: flex;
    color:#999;
    font-size:14px;
    line-height:22px;
    padding-left: 20px;
    overflow: hidden;
  }
  .tfr_classifyTime span {
  }
  .tfr_classifyTime a {
    display: block;
    height: 22px;
    text-align: left;
  }
  .commDiv{
    padding-left: 10px;
  }
  #delete {
    color: #1b6d85;
    margin-left: 5px;
  }
  #edit {
    color: #1b6d85;
  margin-left: 5px;
  }

</style>